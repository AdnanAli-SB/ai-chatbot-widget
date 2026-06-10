const ArticleStep = ({ step }) => (
  <div className="help-step">
    {step.heading && <p className="help-step-heading">{step.heading}</p>}
    {step.body && <p className="help-step-body">{step.body}</p>}
    {step.list && (
      <ul className="help-step-list">
        {step.list.map((item, i) => (
          <li key={i} className="help-step-list-item">{item}</li>
        ))}
      </ul>
    )}
    {step.code && (
      <pre className="help-step-code"><code>{step.code}</code></pre>
    )}
  </div>
);

const HelpArticleDetail = ({ article, category }) => (
  <div className="help-detail">
    <div className="help-detail-body">
      {category && <p className="help-detail-category">{category.title}</p>}
      <h3 className="help-detail-title">{article.title}</h3>
      <p className="help-detail-brief">{article.brief}</p>
      <hr className="help-divider" />
      <div className="help-steps">
        {article.steps.map((step, i) => (
          <ArticleStep key={i} step={step} />
        ))}
      </div>
    </div>
  </div>
);

export default HelpArticleDetail;
