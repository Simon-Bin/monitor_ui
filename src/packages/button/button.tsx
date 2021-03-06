import React, { MouseEventHandler, Component } from "react";
import classNames from "classnames";
import "./style";

const defaultProps = {
  up: false,
  down: false,
  actived: false,
  disabled: false
};

export interface ButtonProps {
  /**是否显示左边箭头
   *
   * @default false
   */
  up?: boolean;
  /**是否显示右边箭头
   *
   * @default false
   */
  down?: boolean;
  /**是否激活
   *
   * @default false
   */
  actived?: boolean;
  /**是否禁用
   *
   * @default false
   */
  disabled?: boolean;
  /**点击事件 */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  [prop: string]: any;
}

export class Button extends Component<ButtonProps> {
  static defaultProps = defaultProps;

  render() {
    const {
      up, // 左箭头
      down, // 右箭头
      actived, // 按钮激活
      disabled, // 按钮禁用
      onClick: handleClick, // 点击事件
      children,
      className,
      ...rest
    } = this.props;

    return (
      <button
        className={classNames(
          "za-button",
          {
            "za-button__up": up,
            "za-button__down": down,
            "za-button__actived": actived
          },
          className
        )}
        disabled={disabled}
        onClick={e => handleClick && !disabled && handleClick(e)}
        {...rest}
      >
        {children}
      </button>
    );
  }
}

export default Button;
