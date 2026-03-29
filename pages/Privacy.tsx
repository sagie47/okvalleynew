import React from 'react';
import { PageHeader, Section, Heading, Text } from '../components/Common';

const Privacy: React.FC = () => {
  return (
    <>
      <PageHeader
        badge="Legal"
        title={
          <>
            Privacy <br />
            <span className="text-white/50">Policy</span>
          </>
        }
        subtitle="How OK Valley Web collects, uses, and protects inquiry data on this site."
      />

      <Section className="bg-white">
        <div className="max-w-4xl space-y-12">
          <div>
            <Heading level={3} className="mb-4">What we collect</Heading>
            <Text className="max-w-none">
              When you contact us, we may collect your name, business name, email address, phone number, inquiry type, and any project information you choose to send.
            </Text>
          </div>

          <div>
            <Heading level={3} className="mb-4">How we use it</Heading>
            <Text className="max-w-none">
              We use inquiry data to respond to your request, prepare for booked calls, evaluate fit for a pilot, and improve site performance and conversion flow.
            </Text>
          </div>

          <div>
            <Heading level={3} className="mb-4">Analytics and third parties</Heading>
            <Text className="max-w-none">
              This site may use analytics tools and booking providers such as Cal.com to measure page activity and support scheduling. Those tools may collect browser and usage data according to their own policies.
            </Text>
          </div>

          <div>
            <Heading level={3} className="mb-4">Data handling</Heading>
            <Text className="max-w-none">
              We do not sell personal information. We keep inquiry information only as long as needed to manage conversations, deliver services, or meet legal obligations.
            </Text>
          </div>

          <div>
            <Heading level={3} className="mb-4">Contact</Heading>
            <Text className="max-w-none">
              For privacy questions, email `info@okvalleyweb.com`.
            </Text>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Privacy;
