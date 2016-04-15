import React from 'react';
import { action, storiesOf } from '@kadira/storybook';
import PGButton from '..';

storiesOf('PGButton', module)
  .add('with text', () => (
    <PGButton onClick={ action('button clicked') }>This is a PGButton</PGButton>
  ))
  .add('with emoji', () => (
    <PGButton onClick={ action('button clicked') }>This is a PGButton with 💖🎉⚡️💀</PGButton>
  ))
  .add('with custom styles', () => {
    const customStyles = {
      color: 'red',
      fontWeight: 'bold',
    };
    return (
      <PGButton onClick={ action('button clicked') }
        style={ customStyles }
      >
        This is a PGButton with bold red text
      </PGButton>
    );
  })
  .add('with no onClick', () => (
    <PGButton>No onClick (generates an error)</PGButton>
  ))
  .add('with no text', () => (
    <PGButton onClick={ action('button clicked') }/>
  ));
