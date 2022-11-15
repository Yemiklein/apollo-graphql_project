const { UserList, MovieList } = require ('../dummyData')
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
        },
        movies: () => {
            return MovieList;
        },
        movie: (parent, args) => {
            // return MovieList.find(movie => movie.title === args.title);
            const title = args.title;
            const movie = _.find(MovieList,
                {title});
            return movie;
        },
    },
    User: {
       favoriteMovies: () => {
             return _.filter(
                    MovieList,
                    movie => movie.rating > 9.0 || movie.year >= 2010 && movie.year <= 2023
             )
       },
    },

    Mutation: {
        createUser: (parent, args) => {
            const user = args.input;
            const lastId = UserList[UserList.length - 1].id;
            user.id = lastId + 1;
            UserList.push(user);
            return user;
        },
    
           
    updateUsername: (parent, args) => {
        const {id, newUsername} = args.input;
        let userUpdated;
        UserList.forEach((user) => {
            if(user.id === Number(id)) {
                user.username = newUsername;
                userUpdated = user;
            }
        }); 
        return userUpdated;
        },

    deleteUser: (parent, args) => {
        const id = args.id;
        const userDeleted = _.find(UserList, {id: Number(id)});
        _.remove(UserList, user => user.id === Number(id));
        return userDeleted;
    }
}
};




module.exports = {resolvers};
