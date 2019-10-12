import {
  IButtonStyles,
  ICustomizations,
} from 'office-ui-fabric-react'

const DefaultButtonStyles: IButtonStyles = {
  root: {
    fontSize: 14,
    height: 28,
    width: 'unset',
    backgroundColor: 'transparent',
    color: 'var(--buttonPrimary)',
  },
  label: { color: 'var(--buttonText)', },
  rootHovered: { backgroundColor: 'transparent', color: 'var(--buttonPrimaryHovered)' },
  rootPressed: { backgroundColor: 'transparent', color: 'var(--buttonPrimaryHovered)' },
  rootExpanded: { color: 'var(--buttonPrimaryHovered)' },
  rootExpandedHovered: { color: 'var(--buttonPrimaryHovered)' },
}

export const Customizations: ICustomizations = {
  scopedSettings: {
    DefaultButton: {
      styles: DefaultButtonStyles
    }
  },
  settings: {}
}