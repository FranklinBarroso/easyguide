import {css} from 'react-emotion'

const tagSelectedState = () => css`
  color: white;
  border-color: transparent;
  background: #2f0549;
`

export const labelBaseStyle = () => css`
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: bold;
  color: #322828;
`

export const tagsWrapperBaseStyle = () => css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`

export const tagBaseStyle = () => css`
  cursor: pointer;
  display: inline-block;
  margin: 0 8px;
  padding: 9px 12px;
  border: 1px solid #d8d8d8;
  font-size: 14px;
  color: #322828;
  background-color: white;
  border-radius: 3px;
  transition: background 120ms linear, color 80ms ease-in;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: white;
    border-color: transparent;
    background: #9c63c0;
  }

  &:active {
    color: white;
    border-color: transparent;
    background: #4c0677;
  }
`

export const tagSelectedStyle = ({selected}) => selected && tagSelectedState()
