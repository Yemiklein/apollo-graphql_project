const { UserList } = require ('../dummyData')
const _ = require('lodash');




const resolvers = {
    Query: {
        users: () => {
            return UserList;
        },
        user: (parent, args) => {
            // return UserList.find(user => user.id === args.id);
            const id = args.id;
            const user = _.find(UserList, {id: Number(id)});
            return user;
        }
    },
};


module.exports = {resolvers};
