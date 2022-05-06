puts 'starting seeding'

user1 = User.create(username: 'user', password:'user', admin: false)
user2 = User.create(username: 'admin', password:'admin', admin: true)

lodge1 = Lodging.create(description: 'Sit by  the fire, Grill up some burgers, hike the trails out the front door, or just chill on the patio of our brand new yurt. ',image: , sleeps: 5, shower: false)
lodge2 = Lodging.create(description: 'Enjoy a cozier option in our cabin and stoke the fire, play board games all night or take our canoe on the lake that is just a few steps down the hill!', image: ,sleeps: 4, shower: true)
lodge3 = Lodging.create(description: 'Our newest option is our renovated school bus which we are sure you will enjoy.  ',image: , sleeps: 3, shower: true)

book1 = Booking.create(checkin: '2023-5-09' , checkout: '2023-5-13', user_id: user1.id, lodging_id: lodge1.id)
book2 = Booking.create(checkin:'2022-11-12', checkout: '2023-11-19', user_id: user2.id, lodging_id: lodge2.id)





puts 'finished seeding'