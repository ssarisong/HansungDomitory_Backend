import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';

export class RefreshStrategy extends PassportStrategy(Strategy, 'jaeheoga') {
  constructor() {
    super({
      jwtFromRequest: (req) => {
        let refreshToken = null;
        if (req && req.headers.cookie) {
          const cookies = req.headers.cookie
            .split(';')
            .map((cookie) => cookie.trim());
          const refreshTokenCookie = cookies.find((cookie) =>
            cookie.startsWith('refreshToken='),
          );
          if (refreshTokenCookie) {
            refreshToken = refreshTokenCookie.replace('refreshToken=', '');
          }
        }
        return refreshToken;
      },
      secretOrKey: process.env.JWT_REFRESH_SECRET,
    });
  }

  //인증
  validate(payload) {
    console.log(payload);
    return {
      id: payload.sub,
    };
  }
}
