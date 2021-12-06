import FaIcon from 'components/common/fa-icon'
import type { LinkContent } from 'types/cms/work'

const LinkButton = ({ icon, text, href }: LinkContent): JSX.Element => (
  <div
    className={`m-2 px-4 md:px-6 py-1 md:py-1.5 inline-block text-natural-white bg-natural-gray hover:bg-black rounded-full transition-colors`}
  >
    <a
      className="text-sm md:text-base"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaIcon name={icon[0]} />
      <span className="ml-1.5 inline-block">{text}</span>
    </a>
  </div>
)

export default LinkButton