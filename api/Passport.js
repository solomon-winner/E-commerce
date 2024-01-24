import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import Users from "./controllers/usersControl";
import {jwtSecret} from './index'

const jwt = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtSecret,
};

passport.use(new JwtStrategy(jwt, async(payload, done) => 
{
    try {
        const user = await Users.findById(payload.sub);
        if (!user) return done(null, false);

        return done(null, user);
    } catch (error) {
        return done(error, false);
    }
}));

export default passport;