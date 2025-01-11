import { FAQ_MOCK } from '@/mock/faq-mock'
import FAQRoot from '@/components/faq/faq-root'
import FAQItem from '@/components/faq/faq-item'
import FAQContentLeft from '@/components/faq/faq-content-left'
import FAQContentRight from '@/components/faq/faq-content-right'

export default function FaqList() {
  const firstHalfOfTheFaqArray = FAQ_MOCK.slice(
    0,
    Math.ceil(FAQ_MOCK.length / 2),
  )

  const secondHalfOfTheFaqArray = FAQ_MOCK.slice(Math.ceil(FAQ_MOCK.length / 2))

  return (
    <FAQRoot name="Dúvidas frequentes">
      <FAQContentLeft>
        {firstHalfOfTheFaqArray.map((item) => (
          <FAQItem
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </FAQContentLeft>

      <FAQContentRight>
        {secondHalfOfTheFaqArray.map((item) => (
          <FAQItem
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </FAQContentRight>
    </FAQRoot>
  )
}
