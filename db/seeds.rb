puts 'starting seeding'

user1 = User.create(username: 'user', password:'user')
user2 = User.create(username: 'admin', password:'admin', admin: true)

lodge1 = Lodging.create(name:'Yurt', description: 'Sit by  the fire, Grill up some burgers, hike or bike on the trails out the front door, or just chill on the patio of our brand new yurt. ',image: "https://webreserv.com/catalog/dupontyurtskanteen/images/ridgeline2.6-dx-w600-h400-e.jpg", sleeps: 5, shower: false)
lodge2 = Lodging.create(name:'Cabin in the Woods', description: 'Enjoy a cozier option in our cabin and stoke the fire, play board games all night or take our canoe on the lake that is just a few steps down the hill!', image: "https://www.carolinamountainvacations.com/CabinRentals/CabinPictures/Adventure-Awaits-Lrg-1-med.jpg", sleeps: 4, shower: true)
lodge3 = Lodging.create(name:'Magic School Bus', description: 'Our newest option is our completely renovated school bus which we are sure you will enjoy. Climb the ladder onto the roof to catch the best sunset you have ever seen!  ', image:" https://cdn.apartmenttherapy.info/image/upload/v1642103443/at/news-culture/2022-01/3e59eab6-3f3a-4a8e-bb90-e20501e2687d.jpg", sleeps: 3, shower: true)

book1 = Booking.create(checkin: '2023-5-09' , checkout: '2023-5-13', user_id: user1.id, lodging_id: lodge1.id)
book2 = Booking.create(checkin:'2022-11-12', checkout: '2023-11-19', user_id: user2.id, lodging_id: lodge2.id)

# r1 = Review.create( description: 'We had a great trip! Will be reccomending to others', lodging_id: lodge1.id,  user_id: user2.id)


puts 'finished seeding'