import React from 'react'

import { Avatar as MaterialAvatar } from '@material-ui/core'

interface AvatarProps {
  avatar: string
}

const Avatar: React.FC<AvatarProps> = ({ avatar }) => (
  <MaterialAvatar src={avatar} style={{
    width: 60,
    height: 60
  }}/>
)

export default Avatar
