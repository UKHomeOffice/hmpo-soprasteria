/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  // Insert values here

  'newApplications': [{
      'id': 'PEX1010784',
      'name': 'Lacey Cervantes',
      'collectionDate': '29/12/2018',
      'collectionTime': '09:51',
      'collectionOffice': 'Peterborough'
    },
    {
      'id': 'PEX2095210',
      'name': 'Lawrence Robertson',
      'collectionDate': '24/12/2018',
      'collectionTime': '12:20',
      'collectionOffice': 'Durham'
    },
    {
      'id': 'PEX3100591',
      'name': 'Veronica Carver',
      'collectionDate': '30/12/2018',
      'collectionTime': '10:11',
      'collectionOffice': 'Liverpool'
    },
    {
      'id': 'PEX2297261',
      'name': 'Olivia Fischer',
      'collectionDate': '21/12/2018',
      'collectionTime': '09:28',
      'collectionOffice': 'Newport'
    },
    {
      'id': 'PEX0074586',
      'name': 'Brown Schneider',
      'collectionDate': '23/12/2018',
      'collectionTime': '02:40',
      'collectionOffice': 'London'
    },
    {
      'id': 'PEX0722849',
      'name': 'Russell Black',
      'collectionDate': '27/12/2018',
      'collectionTime': '09:39',
      'collectionOffice': 'Peterborough'
    },
    {
      'id': 'PEX6332932',
      'name': 'Maggie Mckay',
      'collectionDate': '23/12/2018',
      'collectionTime': '10:31',
      'collectionOffice': 'Belfast'
    },
    {
      'id': 'PEX2310110',
      'name': 'Allison Clements',
      'collectionDate': '28/12/2018',
      'collectionTime': '01:24',
      'collectionOffice': 'Newport'
    },
    {
      'id': 'PEX6740922',
      'name': 'Reyes Richard',
      'collectionDate': '21/12/2018',
      'collectionTime': '05:12',
      'collectionOffice': 'Glasgow'
    },
    {
      'id': 'PEX9705615',
      'name': 'Beatrice Blevins',
      'collectionDate': '27/12/2018',
      'collectionTime': '01:10',
      'collectionOffice': 'London'
    }
  ],

  'reports': [{
      'date': '29/12/2018',
      'name': '29/12/2018-Peterborough.xml'
    },
    {
      'date': '24/12/2018',
      'name': '29/12/2018-Peterborough.xml'
    },
    {
      'date': '30/12/2018',
      'name': '29/12/2018-Liverpool.xml'
    },
    {
      'collectionOffice': 'Newport',
      'date': '30/12/2018',
      'name': '29/12/2018-Newport.xml'
    },
    {
      'date': '30/12/2018',
      'name': '29/12/2018-Liverpool.xml'
    },
    {
      'collectionOffice': 'Newport',
      'date': '30/12/2018',
      'name': '29/12/2018-Newport.xml'
    },
    {
      'date': '24/12/2018',
      'name': '29/12/2018-Peterborough.xml'
    },
    {
      'date': '24/12/2018',
      'name': '29/12/2018-Belfast.xml'
    }
  ]
}