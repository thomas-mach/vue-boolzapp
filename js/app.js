const { createApp } = Vue

createApp({
    data() {
        return {
            currentIndex: 0,
            contactsFiltrate: [],
            searchValue: '',
            imputValue: '',
            contacts: [
                {
                    id: 0,
                    name: 'Fabio',
                    avatar: 'img 3/avatar_1.jpg',
                    visible: true,
                    
                    
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ]
                },
                
            {   
                id: 1,
                name: 'Pietro',
                avatar: 'img 3/avatar_2.jpg',
                visible: true,
              
            
                messages: [
                {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
                ]
            },
            {
                id: 2,
                name: 'Samuele',
                avatar: 'img 3/avatar_3.jpg',
                visible: true,
               
                    
                messages: [
                {
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
            ]
        },
        {
            id: 3,
            name: 'Alessandro C.',
            avatar: 'img 3/avatar_4.jpg',
            visible: true,
            
                
                messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
                ]
            },
            {
                id: 4,
                name: 'Alessandro',
                avatar: 'img 3/avatar_5.jpg',
                visible: true,
              
                
                messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Va bene, stasera la sento',
                    status: 'received'
                }
                ]
            },
            {
                id: 5,
                name: 'Claudia',
                avatar: 'img 3/avatar_6.jpg',
                visible: true,
               
                
                messages: [
                {
                    id: 7,
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao Claudia, hai novità?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Non ancora',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent'
                }
                ]
            },
            {
                id: 6,
                name: 'Federico',
                avatar: 'img 3/avatar_7.jpg',
                visible: true,
                
                
                messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received'
                }
                ]
            },
            {
                id: 7,
                name: 'Davide',
                avatar: 'img 3/avatar_8.jpg',
                visible: true,
              
                
                messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'OK!!',
                    status: 'received'
                }
                ]
            }
    
        ]
        
    }
  },
  methods:{
    addMessage(){
        if(this.imputValue !== ''){
            const newMessage = {
                date: '10/01/2020 15:50:00',
                message: this.imputValue,
                status: 'sent'
            }
            this.contacts[this.currentIndex].messages.push(newMessage)
            this.imputValue = ''
            this.addOkMessage()
        }
    },
    addOkMessage(){
        
        setTimeout(() => {
            const okMessage = {
                date: '10/01/2020 15:50:00',
                message: 'ok',
                status: 'received'
            }
            this.contacts[this.currentIndex].messages.push(okMessage)
        }, 1000)
    },
   
    
},

computed: {
    filteredContacts() {
            console.log(this.currentIndex)
        return this.contacts.filter(contact => {
        return contact.name.toLowerCase().includes(this.searchValue.toLowerCase())
      })
    }
}
}).mount('#app')

