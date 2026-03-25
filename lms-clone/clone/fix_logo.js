const fs = require('fs');
const file = 'c:/Users/priyansh patel/OneDrive/Desktop/lms_clone/lms-clone/clone/src/components/Navbar.jsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /<div >([\s\S]*?)<img src="([^"]+)" alt="" \/>([\s\S]*?)\{initials\}([\s\S]*?)<\/div>/g;

if (regex.test(content)) {
    content = content.replace(regex, `<div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-neutral-800 border border-neutral-600 shrink-0 shadow-md">
            <img src="$2" alt="Logo" className="w-full h-full object-cover" />
          </div>`);
    fs.writeFileSync(file, content);
    console.log('Replaced logo block successfully.');
} else {
    console.log('Regex did not match.');
}
