import { ProfileApiT } from '../types';
import { MATCH_PROFILE, NON_MATCH_PROFILE, PROFILE_LIST } from './mock';
import { isProfileFavorite, daysFromNowCurrentYear } from './utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

describe('daysFromNowCurrentYear', () => {
  it('calculates the number of days until the end of the year', () => {
    vi.setSystemTime(new Date(2023, 3, 12));
    const daysLeft = daysFromNowCurrentYear('2023-12-31T23:23:20.178Z');
    expect(daysLeft).toBe(264);
  });
  it('calculates the number of days until tomorrow end of the year', () => {
    vi.setSystemTime(new Date(2023, 3, 12));
    const daysLeft = daysFromNowCurrentYear(new Date(2023, 3, 13).toUTCString());
    expect(daysLeft).toBe(1);
  });
  it('deals with dates that have already occured this year', () => {
    vi.setSystemTime(new Date(2023, 3, 12));
    const daysLeft = daysFromNowCurrentYear(new Date(2023, 3, 11).toUTCString());
    expect(daysLeft).toBe(365);
  });
});

describe('isProfileFavorite', () => {
  it('returns true if profile is in list of profiles', () => {
    const profileFavorite = isProfileFavorite(MATCH_PROFILE, PROFILE_LIST);
    expect(profileFavorite).toBeTruthy();
  })
  it('returns false if profile is not in list of profiles', () => {
    const profileFavorite = isProfileFavorite(NON_MATCH_PROFILE, PROFILE_LIST);
    expect(profileFavorite).toBeFalsy();
  })
  it('returns false if profile is empty', () => {
    const profileFavorite = isProfileFavorite({} as ProfileApiT, PROFILE_LIST);
    expect(profileFavorite).toBeFalsy();
  })
})