/*
 * File: airdropActions.js
 * Project: react-boilerplate
 * File Created: Friday, 10th August 2018 2:18:19 pm
 * Author: Navi Ocean (navi.ocean@outlook.com)
 * -----
 * Last Modified: Monday, 13th August 2018 5:32:48 pm
 * Modified By: Navi Ocean (navi.ocean@outlook.com>)
 * -----
 * Copyright <<projectCreationYear>> - 2018 Hawking LLC, Hawking LLC
 */
import {
  FETCH_AIRDROP,
  SUBMIT_INVITE_EMAIL,
  SUBMIT_FOLLOW_TELEGRAM,
  SUBMIT_FOLLOW_TWITTER,
  JOIN_CREATED,
  JOIN_PROMOTE_BITCOINTALK,
  JOIN_PROMOTE_TWITTER,
  SET_AIRDROP,
  UPDATE_FOLLOW,
  UPDATE_PROMOTE,
  ADD_LINK_PROMOTE_TWITTER,
  ADD_LINK_PROMOTE_BITCOINTALK,
} from './actionTypes';

export const fetchAirdrop = () => ({
  type: FETCH_AIRDROP,
});

export const setAirdrop = data => ({
  type: SET_AIRDROP,
  payload: data,
});

export const submitInviteEmail = data => ({
  type: SUBMIT_INVITE_EMAIL,
  payload: data,
});

export const submitFollowTelegram = data => ({
  type: SUBMIT_FOLLOW_TELEGRAM,
  payload: data,
});

export const submitFollowTwitter = data => ({
  type: SUBMIT_FOLLOW_TWITTER,
  payload: data,
});

export const updateFollowAidrop = data => ({
  type: UPDATE_FOLLOW,
  payload: data,
});

export const joinPromoteBitcointalk = data => ({
  type: JOIN_PROMOTE_BITCOINTALK,
  payload: data,
});

export const joinPromoteTwitter = data => ({
  type: JOIN_PROMOTE_TWITTER,
  payload: data,
});

export const updatePromoteAirdrop = data => ({
  type: UPDATE_PROMOTE,
  payload: data,
});

export const joinCreated = data => ({
  type: JOIN_CREATED,
  payload: data,
});

export const addLinkPromoteTwitter = data => ({
  type: ADD_LINK_PROMOTE_TWITTER,
  payload: data,
});

export const addLinkPromoteBitcointalk = data => ({
  type: ADD_LINK_PROMOTE_BITCOINTALK,
  payload: data,
});
