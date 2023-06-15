import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Command,
  CreditCard,
  File,
  FileText,
  Github,
  HelpCircle,
  Image,
  Laptop,
  Loader2,
  LucideProps,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  SunMedium,
  Trash,
  Twitter,
  User,
  X,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  // logo: Command,
  logo: (props: LucideProps) => (
    <svg
      width="335"
      height="327"
      viewBox="0 0 335 327"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M133.408 0H148.231V10.4314L148.231 10.4314V0H157.123H163.054H163.054H171.946H171.946H177.877H186.769V10.3215H186.769V0H201.592V14.823H196.724V14.8233H201.592V29.6463H196.766V29.6465H209.005V44.4681V44.4695V59.2911H196.851V59.2914H201.593H216.416H235.724L235.725 59.2911H231.241V44.4681H246.062V29.6465H260.885V39.0327H260.886V29.6465H275.709V44.0136L276.385 44.4681H290.532V59.2911H290.259L290.53 59.7161V59.2914H305.353V74.1144H296.122L296.122 74.1146H305.353V88.9376H290.532V103.759H275.709V96.8342L275.707 96.8348V103.761H275.709V118.584H275.707V133.408H305.354V125.995H320.177V133.408H320.177H320.177H335V148.231H320.177V148.231H335V163.054H320.177V163.054H335V177.876V177.877V192.699H320.177V192.7H320.177V200.11H305.354V192.7H305.353V207.522H290.532H290.53H275.709V192.7H275.709V207.522H275.707V207.522H275.709V222.345H275.707V230.138L275.709 230.139V222.344H290.532V237.167H290.53L290.53 237.167H305.353V251.99H296.622L296.622 251.99H305.353V266.813H290.789L290.532 267.172V281.637H275.709V281.533L275.591 281.639H275.709V296.462H260.886V285.453L260.885 285.453V296.462H246.062V290.792L236.991 281.637H231.241V275.834L231.239 275.832V281.637H216.416V266.814H222.303L222.303 266.813L216.416 266.814H209.005V281.637H197.485V281.639H209.005V296.462H197.527V296.462H201.592V311.283V311.285V326.106H186.769V315.677H186.769V326.106H177.877H171.946H171.946H163.054H163.054H157.123H148.231V315.787H148.231V326.106H133.408V311.285V311.283V296.462H138.235V296.462H125.995V281.639H138.192L138.192 281.637H125.995V266.814H118.584V281.637H103.761V266.814H103.759V281.637H88.9362V281.486L88.8233 281.639H88.9376V296.462H74.1146V285.406L74.1144 285.406V296.462H59.2914V281.639H59.9L59.2911 281.064V281.637H44.4681V267.089L44.1763 266.813H29.6465V251.99H38.558L38.5581 251.99H29.6465V237.167H44.4518L44.4681 237.144V222.344H59.2911V228.107L59.2914 228.107V222.345V207.522V207.522V192.7H59.2911V207.522H44.4695H44.4681H29.6465V192.7H29.6463V200.11H14.8233V192.7V185.287V140.818V133.408V125.995H29.6463V133.408H59.2914V118.584V103.761V102.3L59.2911 102.3V103.759H44.4681V88.9384H40.0223V88.9376H29.6465V74.1146H35.4471L35.4474 74.1144H29.6465V59.2914H43.6812L44.4681 58.6255V44.4681H59.2911V44.6529L59.4813 44.4695H59.2914V29.6465H74.1144V35.8004L74.1146 35.8001V29.6465H88.9376V41.6473L91.7326 44.4681H103.759V56.6054L103.761 56.6074V44.4681H118.584V59.2911H112.078L112.079 59.2914H118.584H133.407H137.558V59.2911H125.995V44.4695V44.4681V29.6465H137.474V29.6463H133.408V14.8233H137.432V14.823H133.408V0ZM246.54 44.4695L246.064 45.1224V44.4695H246.54ZM290.036 88.9362L290.53 88.1947V88.9362H290.036ZM59.2911 118.584H44.4695H44.4681H29.6465V133.407H44.4681H44.4695H59.2911V118.584ZM14.823 133.408H0V148.231H14.823V133.408ZM14.823 148.231H0V163.054H14.823V148.231ZM0 163.054H14.823V177.876V177.877V192.699H0V177.877V177.876V163.054ZM290.53 118.584H275.709V133.407H290.53H290.532H305.353V118.584H290.532H290.53ZM216.416 44.4681H231.239V59.2911H216.416V44.4681Z"
        fill="white"
      />
    </svg>
  ),
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  twitter: Twitter,
  check: Check,
  divider: (props: LucideProps) => (
    <svg
      fill="none"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M16.88 3.549L7.12 20.451" />{" "}
    </svg>
  ),
}