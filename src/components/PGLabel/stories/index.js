import React from 'react';
import { storiesOf } from '@kadira/storybook';
import PGLabel from '..';

storiesOf('PGLabel', module)
  .add('with text', () => (
    <PGLabel>This is a PGLabel</PGLabel>
  ))
  .add('with emoji', () => (
    <PGLabel>This is a PGLabel with 💖🎉⚡️💀</PGLabel>
  ))
  .add('with custom styles', () => {
    const customStyles = {
      color: 'red',
      fontWeight: 'bold',
    };
    return <PGLabel style={ customStyles }>This is a PGLabel with bold red text</PGLabel>;
  })
  .add('with no text', () => (
    <PGLabel/>
  ));
