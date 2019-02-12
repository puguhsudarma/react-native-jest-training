// @flow

import React from "react";
import { View, Text } from "react-native";
import { styles as s } from "react-native-style-tachyons";
import { UniButton } from "../../_global";

type ButtonTodoPropTypes = {
  action: () => void,
  disabled?: boolean
};

const ButtonTodo = (props: ButtonTodoPropTypes) => {
  return (
    <View>
      <UniButton action={props.action} disabled={props.disabled}>
        <View
          style={[
            s.aic,
            s.jcc,
            {
              padding: 10,
              backgroundColor: "blue"
            }
          ]}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "600"
            }}
          >
            {"Simpan"}
          </Text>
        </View>
      </UniButton>
    </View>
  );
};

ButtonTodo.defaultProps = {
  disabled: false
};

export default ButtonTodo;
