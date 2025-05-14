const form = document.querySelector('#form');




const friends = [
   { text: "Onwura Tochukwu", emoji: "(TV📺)" },
   { text: "Ezenwa Vitalis", emoji: "(isi Bread 🍞)" },
   { text: "Ezenwa Kingsley", emoji: "(Mkpo Anuru)" },
   { text: "Udorji Obiageri", emoji: "(Nurse Eliza 👩‍⚕️)" },
   { text: "Onyedikachi Obi", emoji: "(Ogurudu)" },
   { text: "Anyanwu Rex", emoji: "(Nwa Father)" },
   { text: "Nweke Ugochukwu", emoji: "(Ancestor)" },
   { text: "Anthony Agochukwu", emoji: "(kavkans)" },
   { text: "Njideka Ezenwanne", emoji: "(👩fine girl)" },
   { text: "Ikenna Emesi", emoji: "(Pope💒)" },
   { text: "Ogburie Chetachi", emoji: "(Baret)" },
   { text: "Uzozie Chinonso", emoji: "(Mathew 7 7)" },
   { text: "Oliver Umejesi", emoji: "🦸‍♂️" },
   { text: "Osuji Chigozie", emoji: "👨" },
   { text: "Chukwudi Agubosim", emoji: " (Doc)" },
   { text: "Mazi Chimaobi", emoji: "🤶" },
   { text: "Chioma Geraldine", emoji: "👸" },
   { text: "Mmaduba Ifeanyi", emoji: "(Black Angel)" },
   { text: "Osinaya Agu", emoji: "(Poet)" },
   { text: "Ejezie Ijeoma", emoji: "👧" },
   { text: "Lemanya Samuel", emoji: "(nti nara rie👂)" }, ,
   { text: "Ezenwa Ogochukwu", emoji: "(ohi okuko🐓)" },
   { text: "Onyeiwu Uchenna", emoji: "(Otu ogbo)" },
   { text: "Ezenwatu Chinyere", emoji: "👩‍⚕️" },
   { text: "Faustina Merenini", emoji: "(Ndi otu ogbo)" },
   { text: "Ikeme Modestus", emoji: "(Onu utu Ezi🐷)" },
   { text: "Ngozi Emeghiebo", emoji: "(Nwa Teacher)" },
   { text: "Adilaba Ogochukwu", emoji: "🙋‍♀️" },
   { text: "Nnajiofor Kelechukwu", emoji: "(Ndi otu ogbo)" },
   { text: "Okechukwu Ibe", emoji: "🤴" },
   { text: "Nwafor Ijeoma", emoji: " 👩‍🦳" },
   { text: "Olivia Ucheonye", emoji: "👸" },
   { text: "Okrika Goddess", emoji: "(tuza queen)" },
   { text: "Anakebe Ndidiamaka", emoji: "👩" },
   { text: "Ogechukwu Cynthia", emoji: "🕵️‍♀️" },
   { text: "Oluchi Nwaozuzu", emoji: "👮‍♀️" },
   { text: "Stella Akuagba", emoji: "👧" },
   { text: "Timothy Edeh", emoji: " (gentle)" },
   { text: "Malvis Xtopher", emoji: "👼" },
   { text: "Onyi Udoka", emoji: "👧" },
   { text: "Okanu Tochukwu", emoji: "(Afo ka Otele)" },
   { text: "Peter Gbajie", emoji: "(Odi nmanu🛢) " },
   { text: "Kelechi Uwandu", emoji: "😎" },
   { text: "Collins Okafor", emoji: "👨" },
   { text: "Nwabgo Christain", emoji: " 👩" },
   { text: "Okongwu Ifeanyi", emoji: "👦" },
   { text: "Louis Ugochukwu", emoji: "(guy man)" },
   { text: "Ndidi Amaka", emoji: "👩‍🦰" },
   { text: "Perpetual", emoji: "👩‍🦱" },
   { text: "Joe Vian", emoji: "👮‍♀️" },
   { text: "Nkemakolam Obiejesi", emoji: "(Baruwa)" },
   { text: "Chiemaka Ibe", emoji: "(gentle)" },
   { text: "Ogechukwu Okolocha", emoji: "(black queen)" },
   { text: "Izuchuku Ukaefu", emoji: "(Vuga)" },
   { text: "Abgasonye Jude", emoji: "🧔" },
   { text: "Iheanacho Oz", emoji: "👩‍🦱" },
   { text: "Olemba Chinonye", emoji: "👮‍♀️" },
   { text: "Chioma Nwaosu", emoji: "👧" },
   { text: "Chioma Akasiugwu", emoji: "👸" },
   { text: "Chioma Okoye", emoji: "(Queen)" },
   { text: "Olivia  Ogechukwu", emoji: "(Miss Mater👩‍🦳)" },
   { text: "Eziefula Charles", emoji: "(Charles pimple)" },
   { text: "Adorable Franca", emoji: "(Nwa Jesu)" },
   { text: "Olemba Chinonye", emoji: "👼" },
   { text: "Chioma Nwaosu", emoji: "👧" },
   { text: "Chinonso Umeoka", emoji: "👮‍♀️" },
   { text: "Lilian Izuwa", emoji: "👩‍🦰" },
   { text: "Chioma Aguleri", emoji: "👩‍🦳" },
   { text: "Enemchukwu Nnamdi", emoji: "(Osama👼💔)" },
   { text: "Ihesineke Anurika", emoji: "👧" },
   { text: "Ihesineke Chukwudi", emoji: "(Payment👮‍♀️)" },
   { text: "Ugochukwu Okafor", emoji: "(TELEVI📺)" },
   { text: "Mazi Ubochi", emoji: "👮‍♀️" },
   { text: "Ojobo Joseph", emoji: "(Pastor)" },
   { text: "Ojike Ogechi", emoji: "👧" },
   { text: "Anekwe Ifeoma", emoji: "👩" },
   { text: "James Ogbonna", emoji: "(Agba Baller)" },
   { text: "JohnKenedy Ogbonna", emoji: "(Bishop)" },
   { text: "Obioma Okpalakunne", emoji: "👩" },
   { text: "Mbionwu Vivian", emoji: "👧" },
   { text: "Ohazurume Ijeoma", emoji: "(Philomina)" },
   { text: "Obiako Chinedu", emoji: "🧑" },
   { text: "Ebere Nwosu", emoji: "👨" },
   { text: "Marylovina Aguma Njideka", emoji: "👧" },
   { text: "Osigwe Vincent", emoji: "👨" },
   { text: "Ifeanyi Ogbuokiri", emoji: "👱‍♂️" },


];


const teachers = [
   { text: " Mrs Ijeoma", emoji: "(Aunty Igbo)" },
   { text: "Mr Okereke", emoji: "(Sir Dean)" },
   { text: "Mr Igwe", emoji: "(Sir Intro Tech)" },
   { text: "Da Boy", emoji: "(Aunty English)" },
   { text: "Aunty Agric", emoji: "👩" },
   { text: "Adaka", emoji: "(Aunty Maths)" },
   { text: "Aunty Music", emoji: "👩‍🦰" },
   { text: "Aunty Geograghy", emoji: "🧑" },
   { text: "Rev, Sis Amadi", emoji: "👩‍🍳" },
   { text: "Sir Literature", emoji: "(Ndi dara Gwo gwo ri ri)" },
   { text: "Sir Economics", emoji: "👳‍♂️" },
];

let numberclick = 0;



function checkVibe() {
   const name = document.getElementById('name').value;



   if (name == "") {
      resultDiv.textContent = "Please enter a name";
   }
   else if (name && !checkIfNameExists(name, friends)) {

      
      const resultDiv = document.getElementById('result');

      resultDiv.textContent = `You do not seem to be a member of our class.`;
      resultDiv.style.display = 'block';
      resultDiv.style.animation = 'pop 0.5s ease'
      resultDiv.style.backgroundColor = 'red'
      resultDiv.style.color = 'white'

     
   }
   else if (name && checkIfNameExists(name, friends)) {

      let randomTeachers = teachers[Math.floor(Math.random() * teachers.length)];
      let randomVibe = friends[Math.floor(Math.random() * friends.length)];
      let randomVibeText = randomVibe.text;
      let randomVibeEmoji = randomVibe.emoji;
      let randomTeacherstext = randomTeachers.text;
      let randomTeachersEmoji = randomTeachers.emoji;
      let randomTeachers1 = randomTeacherstext + " " + randomTeachersEmoji;
      let randomVibe1 = randomVibeText + " " + randomVibeEmoji;
      const resultDiv = document.getElementById('result');
      let maroon = document.getElementById('audio');
      let numberclickdis = document.getElementById('numberclick');

      resultDiv.textContent = `${name}, have you checked on ${randomVibe1}. Be your brother's keeper. Also remember  ${randomTeachers1}`;
      resultDiv.style.display = 'block';
      resultDiv.style.backgroundColor = 'white'
      resultDiv.style.color = 'black'
      resultDiv.style.animation = 'pop 0.5s ease'
      numberclick++;
      numberclickdis.textContent = `${name}, you checked on ${numberclick} classmate(s)`;

      maroon.play();




   }
}

const checkIfNameExists = (name, friends) => {

   const nameToLowerCase = name.toLowerCase();
   let marker = false;
   friends.forEach((friend) => {
      if (friend.text.toLowerCase().includes(nameToLowerCase) || friend.emoji.toLowerCase().includes(nameToLowerCase)) {
         marker = true;
      }
      
   })
   
   return marker;


}
