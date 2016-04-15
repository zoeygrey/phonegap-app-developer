import React from 'react';
import { storiesOf } from '@kadira/storybook';
import PGButton from '..';

storiesOf('PGButton', module)
  .add('with text', () => (
    <PGButton>This is a PGButton</PGButton>
  ))
  .add('with emoji', () => (
    <PGButton>This is a PGButton with 💖🎉⚡️💀</PGButton>
  ))
  .add('with custom styles', () => {
    const customStyles = {
      color: 'red',
      fontWeight: 'bold',
    };
    return <PGButton style={ customStyles }>This is a PGButton with bold red text</PGButton>;
  })
  .add('with no text', () => (
    <PGButton/>
  ));
