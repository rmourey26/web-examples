import * as React from "react";

import Loader from "../components/Loader";
import { SContainer, STable, SRow, SKey, SValue } from "../components/shared";

import { SModalContainer, SModalTitle, SModalParagraph } from "./shared";

interface RequestModalProps {
  pending: boolean;
  result: any;
}

const RequestLoaderModal = (props: RequestModalProps) => {
  const { pending, result } = props;
  return (
    <>
      {pending ? (
        <SModalContainer>
          <SModalTitle>{"Pending JSON-RPC Request"}</SModalTitle>
          <SContainer>
            <Loader />
            <SModalParagraph>
              {"Waiting response from your wallet"}
            </SModalParagraph>
          </SContainer>
        </SModalContainer>
      ) : result ? (
        <SModalContainer>
          <SModalTitle>
            {result.valid
              ? "JSON-RPC Request Success"
              : "JSON-RPC Request Failed"}
          </SModalTitle>
          <STable>
            {Object.keys(result).map((key) => (
              <SRow key={key}>
                <SKey>{key}</SKey>
                <SValue>{result[key].toString()}</SValue>
              </SRow>
            ))}
          </STable>
        </SModalContainer>
      ) : (
        <SModalContainer>
          <SModalTitle>{"JSON-RPC Request Failed"}</SModalTitle>
        </SModalContainer>
      )}
    </>
  );
};

export default RequestLoaderModal;
