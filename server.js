import express from 'express'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'

const app = express()
const port = 4000

// In-memory data store
const data = {
    "contacts": [
        {
            "created_at": "2022-09-09T10:44:28.553937+00:00",
            "first_name": "Johnsyzs",
            "id": 1234,
            "last_name": "Does",
            "pic": "https://storage.deprakoso.com/img/people/photo-1633332755192-727a05c4013d.jfif",
            "phones": [
                {
                    "number": "+62992922374ds4"
                },
                {
                    "number": "+62992922dsd344"
                }
            ]
        },
        {
            "created_at": "2022-09-09T11:42:26.25453+00:00",
            "first_name": "Foster",
            "id": 1251,
            "last_name": "Crosss",
            "pic": "https://storage.deprakoso.com/img/people/istockphoto-1324786380-612x612.jpg",
            "phones": [
                {
                    "number": "(834) 455-3551"
                },
                {
                    "number": "(814) 407-3624"
                }
            ]
        },
        {
            "created_at": "2022-09-09T11:40:24.223866+00:00",
            "first_name": "Crosby",
            "id": 1242,
            "last_name": "Parsons",
            "pic": "https://storage.deprakoso.com/img/people/360_F_364277864_YK6QT9kXUEI6wqpkFRhbH17LQyANrTvF.jpg",
            "phones": [
                {
                    "number": "(936) 454-3964"
                },
                {
                    "number": "(805) 504-2088"
                }
            ]
        },
        {
            "created_at": "2022-09-09T11:42:19.370852+00:00",
            "first_name": "Pearlieson",
            "id": 1250,
            "last_name": "Francis",
            "pic": "https://storage.deprakoso.com/img/people/istockphoto-1324786380-612x612.jpg",
            "phones": [
                {
                    "number": "(916) 563-2952"
                },
                {
                    "number": "(989) 549-2804"
                }
            ]
        },
        {
            "created_at": "2022-09-09T11:46:06.898821+00:00",
            "first_name": "Rehan",
            "id": 1252,
            "last_name": "Waasys",
            "pic": "https://storage.deprakoso.com/img/people/360_F_364277864_YK6QT9kXUEI6wqpkFRhbH17LQyANrTvF.jpg",
            "phones": [
                {
                    "number": "1221213"
                }
            ]
        },
        {
            "created_at": "2022-09-09T14:12:19.59769+00:00",
            "first_name": "Ciro",
            "id": 1255,
            "last_name": "Cira",
            "pic": "https://storage.deprakoso.com/img/people/photo-1633332755192-727a05c4013d.jfif",
            "phones": [
                {
                    "number": "08182301232"
                }
            ]
        },
        {
            "created_at": "2022-09-09T14:13:19.392394+00:00",
            "first_name": "Cirer",
            "id": 1256,
            "last_name": "Rotr",
            "pic": "https://storage.deprakoso.com/img/people/360_F_364277864_YK6QT9kXUEI6wqpkFRhbH17LQyANrTvF.jpg",
            "phones": [
                {
                    "number": "0912831823123"
                }
            ]
        },
        {
            "created_at": "2022-09-09T14:14:42.299353+00:00",
            "first_name": "Pesto",
            "id": 1257,
            "last_name": "Zuchinni",
            "pic": "https://storage.deprakoso.com/img/people/istockphoto-1324786380-612x612.jpg",
            "phones": [
                {
                    "number": "08102830812"
                }
            ]
        },
        {
            "created_at": "2022-09-09T14:17:00.096075+00:00",
            "first_name": "Ciro",
            "id": 1258,
            "last_name": "Cira",
            "pic": "https://storage.deprakoso.com/img/people/photo-1633332755192-727a05c4013d.jfif",
            "phones": [
                {
                    "number": "08123891213"
                }
            ]
        },
        {
            "created_at": "2022-09-09T14:18:08.849753+00:00",
            "first_name": "Ciro",
            "id": 1259,
            "last_name": "Cora",
            "pic": "https://storage.deprakoso.com/img/people/360_F_364277864_YK6QT9kXUEI6wqpkFRhbH17LQyANrTvF.jpg",
            "phones": [
                {
                    "number": "08128128122"
                }
            ]
        },
        {
            "created_at": "2022-09-09T15:23:06.060412+00:00",
            "first_name": "Jimmy",
            "id": 1263,
            "last_name": "Neutron",
            "pic": "https://storage.deprakoso.com/img/people/photo-1633332755192-727a05c4013d.jfif",
            "phones": [
                {
                    "number": "0879798989979"
                },
                {
                    "number": "08797899179791"
                }
            ]
        },
        {
            "created_at": "2022-09-09T15:26:07.855798+00:00",
            "first_name": "Jack",
            "id": 1267,
            "last_name": "Kirby",
            "pic": "https://storage.deprakoso.com/img/people/360_F_364277864_YK6QT9kXUEI6wqpkFRhbH17LQyANrTvF.jpg",
            "phones": [
                {
                    "number": "8090809080809"
                }
            ]
        },
        {
            "created_at": "2022-09-09T15:30:18.350022+00:00",
            "first_name": "Uvuvwevwevwe",
            "id": 1271,
            "last_name": "UntumbwebwebweOssas",
            "pic": "https://storage.deprakoso.com/img/people/istockphoto-1324786380-612x612.jpg",
            "phones": [
                {
                    "number": "987654325689"
                }
            ]
        },
        {
            "created_at": "2022-09-09T15:24:51.627453+00:00",
            "first_name": "Assa",
            "id": 1266,
            "last_name": "Kiara",
            "pic": "https://storage.deprakoso.com/img/people/360_F_364277864_YK6QT9kXUEI6wqpkFRhbH17LQyANrTvF.jpg",
            "phones": [
                {
                    "number": "1213121212"
                }
            ]
        },
        {
            "created_at": "2022-09-09T09:18:44.81755+00:00",
            "first_name": "Johnsss",
            "id": 1230,
            "last_name": "Doe3",
            "pic": "https://storage.deprakoso.com/img/people/photo-1633332755192-727a05c4013d.jfif",
            "phones": [
                {
                    "number": "+6292922374ds4"
                },
                {
                    "number": "+6292922dsd344"
                }
            ]
        }
    ]
}

// Schema
const typeDefs = `
type Contact {
  created_at: String!
  first_name: String!
  id: Int!
  last_name: String!
  pic: String!
  phones: [Phone!]!
}

type Phone{
    number: String!
}

type Query {
    message : String
    contacts(first_name: String, last_name: String): [Contact]
  contact(first_name: String): Contact
}
`

// Resolver for warriors
const resolvers = {
    Query: {
        message:(obj, args, context) => ("HALLO"),
        contacts: (obj, args, context) => {
            console.log(context.contacts)
            if (args.first_name) {
                return context.contacts.filter((cha) => {return cha.first_name.toLowerCase().indexOf(args.first_name.toLowerCase()) >= 0
                    || cha.last_name.toLowerCase().indexOf(args.first_name.toLowerCase()) >= 0}) ?? null
            } else {
                return context.contacts
            }
        },
    },
}

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (request, response) => {
    response.send('Hello, GraphQL!')
  })

// Entrypoint
app.use(
  '/graphql',
  graphqlHTTP({
    schema: executableSchema,
    context: data,
    graphiql: true,
  })
)

app.listen(port, () => {
  console.log(`Running a server at http://localhost:${port}`)
})