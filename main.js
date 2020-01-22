//let results = fetch('https://randomuser.me/api/');
//console.log(results);
/*if(results.ok) {
fetch('https://randomuser.me/api/').then(data => console.log(data)).catch(err => console.log('Catch error', err));
console.log(results.json());
}*/
/*$.ajax({
    url: 'https://randomuser.me/api/?results=10',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });
*/
function createEl(element, class_name = '') {
  let el = document.createElement(element);
  el.className = class_name;
  return el;
}

function append(parent, el) {
  return parent.appendChild(el);
}

fetch('https://randomuser.me/api/?results=10')
.then(res => res.json())
.then(function(data) {
    let users = data.results;
    console.log(users);
    if(users.length > 0) {
      let container = createEl('div', 'container');
      append(document.body, container);

      let row = createEl('div', 'row');
      append(container, row);
      //console.log(users);
      for(let user in users) {
        let card = createEl('div', 'card col-sm-3');
        let img = createEl('img', 'card-img-top');
        img.src = users[user].picture.large;
        append(card, img);

        let card_body = createEl('div', 'card-body');
        let card_title = createEl('div', 'card-title');
        card_title.textContent = `${users[user].name.title} ${users[user].name.first} ${users[user].name.last}`;
        append(card_body, card_title);
        append(card, card_body);


        let list_group = createEl('ul', 'list-group list-group-flush'); 

        let phone = createEl('li', 'list-group-item'); 
        phone.textContent = `Телефон: ${users[user].phone}`;
        append(list_group, phone);
        let email = createEl('li', 'list-group-item'); 
        email.textContent = `Email: ${users[user].email}`;
        append(list_group, email);
        let city = createEl('li', 'list-group-item'); 
        city.textContent = `Город: ${users[user].location.city}`;
        append(list_group, city);

        append(card, list_group);


        append(row, card);
      }

    }
})
.catch(err => console.log('Catch error', err));