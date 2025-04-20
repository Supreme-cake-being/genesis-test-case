import { Button, Tooltip } from "@heroui/react";
import { FC } from "react";

export const EditButton: FC<{ instance: string; onPress: () => void }> = ({
  instance,
  onPress,
}) => {
  return (
    <Button onPress={onPress} isIconOnly>
      <Tooltip content={`Edit ${instance}`}>
        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
          <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height="1em"
            role="presentation"
            viewBox="0 0 20 20"
            width="1em"
          >
            <path
              d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              strokeWidth={1.5}
            />
            <path
              d="M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              strokeWidth={1.5}
            />
            <path
              d="M2.5 18.3333H17.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              strokeWidth={1.5}
            />
          </svg>
        </span>
      </Tooltip>
    </Button>
  );
};

export const DeleteButton: FC<{ instance: string; onPress: () => void }> = ({
  instance,
  onPress,
}) => {
  return (
    <Button onPress={onPress} isIconOnly>
      <Tooltip content={`Delete ${instance}`}>
        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
          <svg
            aria-hidden="true"
            fill="rgb(161, 161, 170)"
            focusable="false"
            height="1em"
            role="presentation"
            viewBox="0 0 482.428 482.429"
            width="1em"
          >
            <g>
              <g>
                <path
                  d="M381.163,57.799h-75.094C302.323,25.316,274.686,0,241.214,0c-33.471,0-61.104,25.315-64.85,57.799h-75.098
			c-30.39,0-55.111,24.728-55.111,55.117v2.828c0,23.223,14.46,43.1,34.83,51.199v260.369c0,30.39,24.724,55.117,55.112,55.117
			h210.236c30.389,0,55.111-24.729,55.111-55.117V166.944c20.369-8.1,34.83-27.977,34.83-51.199v-2.828
			C436.274,82.527,411.551,57.799,381.163,57.799z M241.214,26.139c19.037,0,34.927,13.645,38.443,31.66h-76.879
			C206.293,39.783,222.184,26.139,241.214,26.139z M375.305,427.312c0,15.978-13,28.979-28.973,28.979H136.096
			c-15.973,0-28.973-13.002-28.973-28.979V170.861h268.182V427.312z M410.135,115.744c0,15.978-13,28.979-28.973,28.979H101.266
			c-15.973,0-28.973-13.001-28.973-28.979v-2.828c0-15.978,13-28.979,28.973-28.979h279.897c15.973,0,28.973,13.001,28.973,28.979
			V115.744z"
                />
                <path
                  d="M171.144,422.863c7.218,0,13.069-5.853,13.069-13.068V262.641c0-7.216-5.852-13.07-13.069-13.07
			c-7.217,0-13.069,5.854-13.069,13.07v147.154C158.074,417.012,163.926,422.863,171.144,422.863z"
                />
                <path
                  d="M241.214,422.863c7.218,0,13.07-5.853,13.07-13.068V262.641c0-7.216-5.854-13.07-13.07-13.07
			c-7.217,0-13.069,5.854-13.069,13.07v147.154C228.145,417.012,233.996,422.863,241.214,422.863z"
                />
                <path
                  d="M311.284,422.863c7.217,0,13.068-5.853,13.068-13.068V262.641c0-7.216-5.852-13.07-13.068-13.07
			c-7.219,0-13.07,5.854-13.07,13.07v147.154C298.213,417.012,304.067,422.863,311.284,422.863z"
                />
              </g>
            </g>
          </svg>
        </span>
      </Tooltip>
    </Button>
  );
};
