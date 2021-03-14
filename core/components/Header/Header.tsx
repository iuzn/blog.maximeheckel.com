import React from 'react';
import { Logo } from './Logo';
import { Title } from './Title';
import { HeaderProps } from './types';
import { Wrapper } from './Wrapper';

class Header extends React.Component<HeaderProps> {
  public static Wrapper = Wrapper;
  public static Logo = Logo;
  public static Title = Title;

  render() {
    const { children, collapsableOnScroll, sticky } = this.props;

    return (
      <Wrapper collapsableOnScroll={collapsableOnScroll} sticky={sticky}>
        {children}
      </Wrapper>
    );
  }
}

export default Header;
