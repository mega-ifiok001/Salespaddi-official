'use server';

import { onAuthenticateUser } from './auth';
import { countProducts } from './product';
import { countWebinars } from './webinar';

export const getProductCount = async () => {
  try {
    const user = await onAuthenticateUser();
    if (!user?.user?.id) return 0;
    const result = await countProducts(user.user.id);
    return result.count ?? 0;
  } catch (error) {
    console.error('Error getting product count:', error);
    return 0;
  }
};

export const getWebinarCount = async () => {
  try {
    const user = await onAuthenticateUser();
    if (!user?.user?.id) return 0;
    const result = await countWebinars(user.user.id);
    return result.count ?? 0;
  } catch (error) {
    console.error('Error getting webinar count:', error);
    return 0;
  }
};