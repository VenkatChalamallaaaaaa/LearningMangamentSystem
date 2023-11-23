import axios from 'axios';

export class ContactService{
  static serverURL=`https://lms-server2-olaj.onrender.com/api`;

  static getGroups(){
    let dataURL = `${this.serverURL}/groups`;
    return axios.get(dataURL);
  }

  static getALLContacts(){
    let dataURL = `${this.serverURL}/contacts`;
    return axios.get(dataURL);
  }

  static getGroup(contact){
    let groupId=contact.groupId;
    let dataURL = `${this.serverURL}/groups/${groupId}`;
    return axios.get(dataURL);
  }

  static getContact(contactID){
    let dataURL = `${this.serverURL}/contacts/${contactID}`;
    return axios.get(dataURL);
  }

  static createContact(contact){
    let dataURL = `${this.serverURL}/contacts`;
    return axios.post(dataURL , contact);
  }

  static updateContact(contact, contactId){
    let dataURL = `${this.serverURL}/contacts/${contactId}`;
    return axios.put(dataURL , contact);
  }

  static deleteContact(contactId){
    let dataURL = `${this.serverURL}/contacts/${contactId}`;
    return axios.delete(dataURL);
  }








}