import { Redirect } from "expo-router";
import React from "react";


export default function Index(): React.JSX.Element {
  return (
    <Redirect href="/(public)/login" />
  )
}
