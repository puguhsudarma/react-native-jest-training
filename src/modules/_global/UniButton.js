import React, { ReactNode } from "react";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight,
  Platform
} from "react-native";
import PropTypes from "prop-types";
import debounce from "lodash/debounce";

type DefaultPropTypes = {
  noDebounce: boolean,
  action: () => void,
  highlightColor: string,
  disabled: boolean,
  borderRadius: number,
  children: ReactNode
};

const Default = (props: DefaultPropTypes) => {
  return (
    <TouchableHighlight
      onPress={
        props.noDebounce
          ? props.action
          : debounce(props.action, 1000, { leading: true, trailing: false })
      }
      underlayColor={props.highlightColor}
      disabled={props.disabled}
      style={{ borderRadius: props.borderRadius }}
    >
      {props.children}
    </TouchableHighlight>
  );
};

type UniButtonPropTypes = {
  noDebounce?: boolean,
  action?: () => void,
  disabled?: boolean,
  highlightColor?: string,
  borderless?: boolean,
  borderRadius?: number,
  foregroundRipple?: boolean,
  children: ReactNode,
  activeOpacity?: number,
  useTouchableHightlight?: boolean
};

const UniButton = (props: UniButtonPropTypes) => {
  // Use TouchableHighlight
  if (props.useTouchableHightlight) {
    return <Default {...props} />;
  }

  // ANDROID
  if (Platform.OS === "android") {
    // Below Lolipop
    if (Platform.Version < 21) {
      return <Default {...props} />;
    }

    // Lolipop or above (with ripple effect)
    return (
      <TouchableNativeFeedback
        onPress={
          props.noDebounce
            ? props.action
            : debounce(props.action, 1000, { leading: true, trailing: false })
        }
        background={TouchableNativeFeedback.Ripple(
          props.highlightColor,
          props.borderless
        )}
        useForeground={
          props.foregroundRipple &&
          TouchableNativeFeedback.canUseNativeForeground()
        }
        disabled={props.disabled}
      >
        {props.children}
      </TouchableNativeFeedback>
    );
  }

  // IOS
  return (
    <TouchableOpacity
      onPress={
        props.noDebounce
          ? props.action
          : debounce(props.action, 1000, { leading: true, trailing: false })
      }
      activeOpacity={props.activeOpacity}
      disabled={props.disabled}
      style={{ borderRadius: props.borderRadius }}
    >
      {props.children}
    </TouchableOpacity>
  );
};

UniButton.defaultProps = {
  noDebounce: false,
  action: () => {},
  highlightColor:
    Platform.OS === "android" && Platform.Version < 21
      ? "rgba(255,255,255,0.05)"
      : "rgba(255,255,255,0.15)",
  disabled: false,
  borderless: false,
  foregroundRipple: false,
  activeOpacity: 0.5,
  useTouchableHightlight: false,
  borderRadius: 0
};

export default UniButton;
