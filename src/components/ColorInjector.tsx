import React from 'react'

type IColorInjectorProps = {
  theme: {
    palette?: {
      [key: string]: string
    }
  }
}

export default class ColorInjector extends React.Component<IColorInjectorProps> {
  generateCSS = () => {
    const { theme = {} } = this.props;
    const { palette } = theme;

    const styles = [];
    for (const semanticColor in palette) {
      styles.push(
        `--${semanticColor}: ${palette[semanticColor]} !important;`
      );
    }

    return styles.join('\n');
  }

  render() {
    return (
      <style> {`:root {\n${this.generateCSS()}\n}`} </style>
    );
  }
}