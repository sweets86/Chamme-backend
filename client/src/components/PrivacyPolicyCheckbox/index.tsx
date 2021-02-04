import React from "react";
import PrivacyPolicyCheckboxStyled from "./PrivacyPolicyCheckboxStyled";
import { Link } from "react-router-dom";

interface Props {
    handlePrivacy: (e: any) => void
}

export default function PrivacyPolicyCheckbox(props: Props) {
  return (
    <PrivacyPolicyCheckboxStyled>
      <input type="checkbox" onChange={(e) => props.handlePrivacy(e)} />
      <Link to={{ pathname: "/privacy", state: window.location.href }}>
        <p className="privacy">
          Jag har läst och samtycker med privacy policy.
        </p>
      </Link>
    </PrivacyPolicyCheckboxStyled>
  );
}
