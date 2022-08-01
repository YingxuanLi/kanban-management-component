import React, { useEffect } from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  // primary?: boolean;
  /**
   * What background color to use
   */
  // backgroundColor?: string;
  
  // labelColor?: string;
  /**
   * How large should the button be?
   */
  // size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  version: string;

  label: string;

  hover: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;

}



/**
 * Primary UI component for user interaction
 */
export const Button = ({
  // primary = true,
  // size = 'medium',
  // backgroundColor,
  // labelColor,
  version,
  hover = false,
  label="button",
  ...props
}: ButtonProps) => {


  const mode = hover ? 'hover':'';
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <>
    {/* <button type="button"><div className='bg-main-purple text-white borderRadius-lg px-2 py-1 rounded-lg '>Hello</div></button> */}
    <button
      type="button"
      className= "hover:bg-red"
      // className={[`btn-${version}`, `${mode}:btn-${version}-hover`, 'hover:red'].join(' ')}
      // className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      // style={{ backgroundColor }}
      {...props}
    >
      {label} 
    </button> 
    <button type="button">{`btn-${version} ${mode}:btn-${version}-hover`}</button>
    </>
  );
};
