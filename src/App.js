import React, { Component } from 'react';
import Section from './components/Section/Section';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

class App extends Component {
  
  render() {
   
    return (
      <>
        <Section title="Phonebook">
          <Form  />
        </Section>
        <Section title="Contacts">
          <Filter  />
          <ContactList />
        </Section>
      </>
    );
  }
}

export default App;