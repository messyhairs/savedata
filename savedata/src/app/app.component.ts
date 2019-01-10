import { Component } from '@angular/core';
import{Contact} from './contacts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Array<Contact>;
    constructor(){
        this.contacts = [];
    }

    addContact(name,phone){
        let contact = new Contact(name,phone);
        this.contacts.push(contact);
        console.log(contact);
    }

    removeContact(contact){
        let index = this.contacts.indexOf(contact);
        this.contacts.splice(index,1);
   console.log("deleted");
    }
}