import { RandomUserApiResponse } from './../types/user.types';
import { RandomUserRaw, UserFormatted } from '../types/user.types';
import 'dotenv/config';
import axios from 'axios';

function formatUser(user: RandomUserRaw): UserFormatted {
  return {
    name: `${user.name.title}, ${user.name.first} ${user.name.last}`,
    location: `${user.location.street.number}, ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`,
    email: user.email,
    age: user.dob.age,
    phone: user.phone,
    cell: user.cell,
    picture: [user.picture.large, user.picture.medium, user.picture.thumbnail],
  };
}

export async function fetchRandomUser(
  results: number,
  page: number,
  search?: string,
): Promise<UserFormatted[]> {
  const response = await axios.get<RandomUserApiResponse>(process.env.RANDOM_USER_API ?? '', {
    params: {
      results,
      page,
    },
  });

  let res = response.data.results.map((user) => formatUser(user));

  //jika user memberikan payload search
  if (search) {
    res = res.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));
  }

  return res;
}
