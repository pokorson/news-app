import React from 'react';
import { shallow } from 'enzyme';
import ArticleDetailsPage from './ArticleDetailsPage';

describe.only('<ArticleDetailsPage />', () => {
  const defaultProps = {
    article: {
      author: "David Murphy",
      content: "Each week, we publish a tech-advice column (Tech 911), where the goal is to take one of your pressing tech questions and provide as many helpful answers as possible. The column depends on your contributions, and our mailbag is running a little low, so its tim… [+1799 chars]",
      description: "Each week, we publish a tech-advice column ( Tech 911 ), where the goal is to take one of your pressing tech questions and provide as many helpful answers as possible. The column depends on your contributions, and our mailbag is running a little low, so it’s …",
      publishedAt: "2019-09-04T14:30:00Z",
      source: { id: null, name: "Lifehacker.com" },
      title: "Tell Us Your Most Annoying Tech Problems",
      url: "https://lifehacker.com/tell-us-your-most-annoying-tech-problems-1837867809",
      urlToImage: "https://i.kinja-img.com/gawker-media/image/upload/s--Of6dudBc--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/qinp1z2tdkkfhrs6cudj.jpg",
    }
  }


  it('Renders article title as page title', () => {
    const wrapper = shallow(<ArticleDetailsPage {...defaultProps} />)

    expect(wrapper.find('[data-test="page-title"]')).toHaveLength(1);
    expect(wrapper.find('[data-test="page-title"]').text()).toEqual(defaultProps.article.title);
  })

  it('Renders article image', () => {
    const wrapper = shallow(<ArticleDetailsPage {...defaultProps} />)
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('img').prop('src')).toEqual(defaultProps.article.urlToImage);
  })

  it('Renders article content', () => {
    const wrapper = shallow(<ArticleDetailsPage {...defaultProps} />)

    expect(wrapper.find('[data-test="article-content"]')).toHaveLength(1);
  })
});