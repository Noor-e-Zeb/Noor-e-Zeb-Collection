const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// پورے پیج کو ہر ایک باکس (Article) کے حساب سے ٹکڑوں میں توڑنا
let parts = html.split('</article>');

for (let i = 0; i < parts.length; i++) {
    // ہر باکس کے اندر لگی تصویر کا نمبر چیک کرنا
    let imgMatch = parts[i].match(/src=\s*[\x22']/images\/(\d+)\.png[\x22']/i);
    
    if (imgMatch) {
        let imgNum = imgMatch[1];
        let name = "";
        let price = "";

        if (imgNum === "1") {
            name = "Bracelet";
            price = "1099 RS";
        } else if (imgNum === "2") {
            name = "Air Ring";
            price = "699 RS";
        } else if (imgNum === "3") {
            name = "Necklace";
            price = "999 RS";
        } else if (imgNum === "4") {
            name = "Air Ring & Haar Set";
            price = "1199 RS";
        }

        if (name && price) {
            // صرف اس مخصوص باکس کے اندر کا نام اور قیمت زبردستی تبدیل کرنا
            parts[i] = parts[i].replace(/<h3[^>]*>[\s\S]*?<\/h3>/i, `<h3>${name}</h3>`);
            parts[i] = parts[i].replace(/<p class=\x22product-price\x22>[\s\S]*?<\/p>/i, `<p class="product-price">${price}</p>`);
        }
    }
}

// دوبارہ فائل کو جوڑنا
html = parts.join('</article>');
html += "\n<!-- force complete block rewrite sync -->";

fs.writeFileSync('index.html', html);
console.log('Every single card block forced to sync perfectly!');
