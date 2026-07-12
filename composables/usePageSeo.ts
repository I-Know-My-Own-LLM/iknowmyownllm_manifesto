const siteUrl = 'https://iknowmyllm.com'
const socialImage = `${siteUrl}/social-banner.jpg`

interface PageSeo {
  title: string
  description: string
  path: string
  type?: 'website' | 'article'
}

export function usePageSeo({ title, description, path, type = 'website' }: PageSeo) {
  const canonical = `${siteUrl}${path}`

  useSeoMeta({
    title,
    description,
    ogSiteName: 'I Know My Own LLM',
    ogTitle: title,
    ogDescription: description,
    ogType: type,
    ogUrl: canonical,
    ogImage: socialImage,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageType: 'image/jpeg',
    ogImageAlt: 'Four-stage illustration for the I Know My Own LLM manifesto',
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: socialImage,
    twitterImageAlt: 'Four-stage illustration for the I Know My Own LLM manifesto'
  })

  useHead({ link: [{ rel: 'canonical', href: canonical }] })
  return { canonical, siteUrl, socialImage }
}
