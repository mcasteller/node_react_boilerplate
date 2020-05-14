import React from 'react';
import Header from './Header';
import { render, cleanup, fireEvent } from '@testing-library/react'
import ProfileMenu from '../ProfileMenu/ProfileMenu';

jest.mock( '../ProfileMenu/ProfileMenu' );
ProfileMenu.mockReturnValue( <div>ProfileMenu</div> );

describe( '<Header />', () => {

  afterEach( cleanup )

  test( 'main menu is opened by default at page load', () => {
    // Arrange
    const { getByLabelText } = render( <Header /> )

    // Assert
    const labelAttribute = getByLabelText( 'toggle main menu' ).getAttribute( 'aria-pressed' );

    expect( labelAttribute ).toBe( "true" )
  } )

  test( 'menu button should update open state property', () => {
    // Arrange
    const { getByLabelText } = render( <Header /> )

    // Act
    const menuButton = getByLabelText( 'toggle main menu' );

    fireEvent.click( menuButton );

    // Assert
    const labelAttribute = getByLabelText( 'toggle main menu' ).getAttribute( 'aria-pressed' );
    expect( labelAttribute ).toBe( "false" )
  } )
} )
