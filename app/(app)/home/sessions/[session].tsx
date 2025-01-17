import { Stack, useSearchParams } from 'expo-router';
import React from 'react';
import StyledText from '../../../../components/common/StyledText';
import MainContainer from '../../../../components/container/MainContainer';

// TODO: Session page
/**
 * - should show details of the event session: speaker name, title of session, description, level, speaker's twitter handle, and a floating action button to share the session info
 */
// TODO: Use real data from mock/sessions.ts

const Session = () => {
  const { id } = useSearchParams();
  return (
    <MainContainer preset="scroll">
      <Stack.Screen
        options={{
          title: `Session ${id}`,
          headerTitleAlign: 'center',
        }}
      />
      <StyledText>session id: {id}</StyledText>
    </MainContainer>
  );
};

export default Session;
