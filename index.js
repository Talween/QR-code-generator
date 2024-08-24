import inquirer from "inquirer";
import qr from "qr-image";
import * as fs from 'fs';


inquirer
  .prompt([
    {
        message: "Type URL:", 
        name:"URL",
    },
  ])
  .then((answers) => {
   const url = answers.URL;
   const qr_svg = qr.image(url);
   qr_svg.pipe(fs.createWriteStream("qr_img.png"));
   fs.writeFile('URL.txt',url, (err) => {
    if (err) throw err;
    console.log('Qr code generated, refer to qr_img.png file');
  });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error(" Prompt couldn't be rendered in the current environment");
    } else {
      console.error("Something else went wrong:", error);
    }
  });

  
 

