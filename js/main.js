/* The toggle articles */
var $articleToggle = $('.article-toggle');
var $articleContents = $('.article-content');

$articleToggle.click(toogleArticles);

function toogleArticles() {
  var $this = $(this);
  var $parentArticle = $this.parents('.article');
  var $toggleContent = $parentArticle.find('.article-content');
  var displayValue = $toggleContent.css('display');

  if (displayValue == 'none') {
    $articleContents.hide();
    $articleToggle.text('open article');
    $toggleContent.show();
    $this.text('close article');
  } else {
    $toggleContent.hide();   
    $this.text('open article');
  }
}

/* Gallery */
var $galleryMain = $('.gallery-main');
var $galleryItem = $('.gallery-item');

$galleryItem.click(changePhoto);

function changePhoto() {
  var $this = $(this);

  /* Change images */
  var newImage = $this.css('backgroundImage');
  $galleryMain.css('backgroundImage', newImage);

  /* Change active image */
  $galleryItem.removeClass('active');
  $this.addClass('active');
}


/* Modal */
var $activeModal = $('.articles-modal-more');
var $modal = $('.modal');
var $modalClose = $('.modal-close');
var $modalContent = $('.modal-content');
var $body = $('body');

$activeModal.click(showModal);
$modalClose.click(hideModal);

function showModal() {
  $modal.fadeIn(300);
  var $this = $(this);
  var hrefAttr = $this.attr('href');
  var innerHtml = $(hrefAttr).html();
  $modalContent.html(innerHtml);
  $body.addClass('overflowPage');
}

function hideModal() {
  $modal.fadeOut(1000);
  $body.removeClass('overflowPage');
  setTimeout(function () {
    $modalContent.empty();
  }, 1000);
}




















// /* Modal */
// var $activeModal = $('.articles-modal-more');
// var $modal = $('.modal');
// var $modalContent = $('.modal-content');
// var $closeModal = $('.modal-close');
// var $body = $('body');

// $activeModal.click(showModal);
// $closeModal.click(closeModal);

// function showModal() {
//   var $this = $(this);
//   var selectorToArticle = $this.attr('href');
//   var elHtml = $(selectorToArticle).html();

//   $body.addClass('overflowPage');
//   $modalContent.append(elHtml);
//   $modal.fadeIn(300);
// }

// function closeModal() {
//   $modal.hide();
//   $modalContent.empty();
//   $body.removeClass('overflowPage');
// }
