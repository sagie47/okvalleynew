import React from 'react';
import { PageHeader, Section, Heading, Text } from '../components/Common';

const Terms: React.FC = () => {
  return (
    <>
      <PageHeader
        badge="Legal"
        title={
          <>
            Terms of <br />
            <span className="text-white/50">Service</span>
          </>
        }
        subtitle="Basic terms that govern use of the OK Valley Web site and initial service inquiries."
      />

      <Section className="bg-white">
        <div className="max-w-4xl space-y-12">
          <div>
            <Heading level={3} className="mb-4">Website use</Heading>
            <Text className="max-w-none">
              This site is provided for information, scheduling, and service inquiry purposes. Use of the site does not create a client relationship until a separate agreement is signed.
            </Text>
          </div>

          <div>
            <Heading level={3} className="mb-4">Quotes and pilots</Heading>
            <Text className="max-w-none">
              Any pricing shown on the site is directional unless otherwise confirmed in writing. Scope, timelines, and deliverables are finalized during the sales and onboarding process.
            </Text>
          </div>

          <div>
            <Heading level={3} className="mb-4">Third-party services</Heading>
            <Text className="max-w-none">
              This site may link to third-party systems including scheduling, analytics, or communication tools. We are not responsible for the operation or content of those third-party services.
            </Text>
          </div>

          <div>
            <Heading level={3} className="mb-4">Content and liability</Heading>
            <Text className="max-w-none">
              Site content is provided as-is for general information. We make reasonable efforts to keep information current, but do not guarantee completeness, uninterrupted access, or fitness for a specific purpose.
            </Text>
          </div>

          <div>
            <Heading level={3} className="mb-4">Contact</Heading>
            <Text className="max-w-none">
              Questions about these terms can be sent to `info@okvalleyweb.com`.
            </Text>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Terms;
