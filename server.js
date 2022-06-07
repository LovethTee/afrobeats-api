const express = require('express')
const app = express()
const PORT = 8000

const Artists = {
    'burna boy':{
        'stageName': 'Burna Boy',
        'birthName': 'Damini Ebunoluwa Ogulu',
        'birthLocation':'Port-Harcout, Nigeria',
        'highestRankingSong': 'Ye',
        'latestAlbum' : 'Love, Damini',
        'bestFeature':'wizkid',
    },
    'wizkid': {
        'stageName': 'Wizkid',
        'birthName': 'Ayodeji Ibrahim Balogun',
        'birthLocation': 'Surulere, Nigeria',
        'highestRankingSong':'Essence',
        'latestAlbum': 'More Love Less Ego',
        'bestFeature': 'Beyonce',
    },
    
    'davido': {
        'stageName': 'Davido',
        'birthName': 'David Adedeji Adeleke',
        'birthLocation': 'Atlanta,US',
        'highestRankingSong':'Fall',
        'latestAlbum': 'A Better Time',
        'bestFeature': 'Chris Brown',
    },
    'tiwa': {
        'stageName': 'Tiwa',
        'birthName': 'Tiwatope Savage',
        'bithLocation': 'Isale Eko, Nigeria',
        'highestRankingSong':'Somebody\'s\ Son',
        'latestAlbum': 'Water & Garri',
        'bestFeature': 'Brandy',
    },
    'tems': {
        'stageName': 'Tems Baby',
        'birthName': 'Temilade Openiyi',
        'birthLocation': 'Lagos Nigeria',
        'highestRankingSong':'Essence',
        'latestAlbum': 'If Orange was a Place',
        'bestFeature': 'Drake & Future',
    },
    'tekno': {
        'stageName': 'Alhaji  Tekno',
        'birthName': 'Augustine Miles Kelechi',
        'birthLocation': 'Bauchi, Nigeria',
        'highestRankingSong':'Duro',
        'latestAlbum': 'None',
        'bestFeature': 'Swae Lee & Drake',
    },
    'kizz daniel': {
        'stageName': 'Kizz Daniel',
        'birthName': 'Oluwatobiloba Daniel Anidugbe',
        'birthLocation': 'Abeokuta',
        'highestRankingSong':'Yeba',
        'latestAlbum': 'Barnabas',
        'bestFeature': 'Davido',
    },
    'joeboy': {
        'stageName': 'Joeboy',
        'birthName': 'Joseph Akinwale Akinfenwa-Donus',
        'birthLocation': 'Nigeria',
        'highestRankingSong':'Baby',
        'latestAlbum': 'Somewhere Between Beauty & Magic',
        'bestFeature': 'Mayorkun',
    },
    'unknown': {
        'unknown': 'unknown',
        'birthName': 'unknown',
        'birthLocation': 'unknown',
        'highestRankingSong':'unknown',
        'latestAlbum': 'unknown',
        'bestFeature': 'unknown',

    
}}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')

})

app.get('/api/:name', (request, response) => {
   const artistName = request.params.name.toLowerCase()
   console.log(Artists[artistName].birthName)
   if(Artists[artistName]){
    response.json(Artists[artistName])
}else{response.json(Artists['unknown'])}
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}! Better go catch it!`)
})