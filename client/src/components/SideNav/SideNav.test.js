import React from 'react';
import _ from 'lodash';
import SideNav from './SideNav';
import { render, cleanup } from '@testing-library/react'

describe( '<SideNav />', () => {

  afterEach( cleanup )

  test( 'when open property is true, then primary menu is visible', () => {
    // Act
    const { getByRole } = render(
      <SideNav open={true}/>
    )

    const menuElement = getByRole( 'menu' );
    const expanded = menuElement.getAttribute( 'aria-expanded' );

    // Assert
    expect( expanded ).toBe( "true" );
  } )

  // TODO: see how we determin if component is hidden
  // knowing that it hides by setting width to zero
  test( 'when open prop is set to false, then menu is hidden', () => {
    // Act
    const { getByRole } = render(
      <SideNav open={false}/>
    )

    const menuElement = getByRole( 'menu' );
    const expanded = menuElement.getAttribute( 'aria-expanded' );

    // Assert
    expect( expanded ).toBe( "false" );
  } )
} )
