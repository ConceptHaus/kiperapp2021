// Funciones Generales
var $menuMobile = $('#mm'),
  $botnoMobile = $('#openMenuMobile'),
  $dataAttr = $('[data-menu-expand]');
function menuMobile() {
  var elDato = $dataAttr.attr('data-menu-expand');
  // console.log(elDato);
  switch (elDato) {
    case 'false':
      $menuMobile.attr('data-menu-expand', true);
      $botnoMobile.attr('data-menu-expand', true);
      $('body').addClass('bloquear');
      TweenMax.to($menuMobile, 0.3, { scale: 1.0, opacity: 1, ease: Power3.easeInOut, zIndex: 5, easeParams: [1.1, 0.7], force3D: true });
      break;
    case 'true':
      $menuMobile.attr('data-menu-expand', false);
      $botnoMobile.attr('data-menu-expand', false);
      $('body').removeClass('bloquear');
      TweenMax.to($menuMobile, 0.3, { scale: 1.2, opacity: 0, ease: Power3.easeInOut, zIndex: -1, easeParams: [1.1, 0.7], force3D: true });
      break;
    default:
      break;
  }
}

// Modal avisos
var $isOpen = false,
    $overlay = $('.overlayGenerico'),
    $modalGen = $('#modalGen');
var $modalGenAvi = $('#modalAvisos');
function effectsModalAviso() {
  TweenMax.to($overlay, 0.1, { autoAlpha: 1 });
  TweenMax.fromTo($modalGenAvi, 0.6, { top: '-300%' }, { delay: 0.2, top: "0%", ease: Power3.easeInOut, easeParams: [1.1, 0.7], force3D: true });
}
function abreModalAvisoID() {
  $('[data-open-aviso]').each(function () {
    $(this).click(function (e) {
      e.preventDefault();
      var $idProd = $(this).data('id-aviso');
      // console.log($idProd);
      effectsModalAviso();
      $($idProd).delay('0.6').show('slow');
    });
  });
}
function closeModalAviso() {
  $('[data-close-aviso]').click(function (e) {
    e.preventDefault();
    $('.contentInfoAviso').hide('fast');
    TweenMax.to($overlay, 0.1, { delay: 0.55, autoAlpha: 0 });
    TweenMax.to($modalGenAvi, 0.55, { top: '300%', ease: Power3.easeInOut, force3D: true });
  });
}

$(function(){
  abreModalAvisoID();
  closeModalAviso();

  TweenMax.to($('#mm'), 0, { scale: 1.2, opacity: 0, zIndex: -1, force3D: true });

  $('#contListMenu ul li a.link').on('click', function(e) {
    // e.preventDefault();
    var $mobileId = $('#mm'),
      $btnId = $('#openMenuMobile');

    $mobileId.attr('data-menu-expand', false);
    $btnId.attr('data-menu-expand', false);
    $('body').removeClass('bloquear');
    TweenMax.to($mobileId, 0.3, { scale: 1.2, opacity: 0, ease: Power3.easeInOut, zIndex: -1, easeParams: [1.1, 0.7], force3D: true });
  });

  $('.cuadro_dialogo').hide();
  $('.cuadro_dialogo').hide();
		$('.globo').click(function () {
	// body... 
			$('.globo').hide(400);
			$('.cuadro_dialogo').show(400);

		})
		$('.cerrar').click(function () {
	// body... 
			$('.globo').show(400);
			$('.cuadro_dialogo').hide(0);

		});
    $('.slidePlanes').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
    $('[data-check-btn]:checked + label').addClass('planesct__link--select').find('[data-price="opcion-2"]').addClass('selPrice');
    // $('[data-price="opcion-2"]').addClass('selPrice');
    $('[data-check-btn]').each(function(){
      var idCh = $(this).attr('id');
      // console.log(idCh);
      $('#'+idCh).click(function() {
        $('[data-check-btn] + label').removeClass('planesct__link--select');
        $('[data-price]').removeClass('selPrice');
        if(this.checked) {
          $(this).next().addClass('planesct__link--select');
          // console.log(idCh);
          $('[data-price="'+idCh+'"]').addClass('selPrice');
        }
      });
    });
    // //bloquear ctrl+c ctrl+v
    // $(document).ready(function(){
    //   $("#bloquear").on('paste', function(e){
    //     e.preventDefault();
    //     alert('Esta acción está prohibida');
    //   })
      
    //   $("#bloquear").on('copy', function(e){
    //     e.preventDefault();
    //     alert('Esta acción está prohibida');
    //   })
    // })
    
    // $('[data-check-pro-btn]:checked + label').addClass('planesct__link--select');
    // $('[data-price-pro="opcion-4"]').addClass('selPrice');
    // $('[data-check-pro-btn]').each(function(){
    //   var idChPro = $(this).attr('id');
    //   // console.log(idCh);
    //   $('#'+idChPro).click(function() {
    //     $('[data-check-pro-btn] + label').removeClass('planesct__link--select');
    //     $('[data-price-pro]').removeClass('selPrice');
    //     if(this.checked) {
    //       $(this).next().addClass('planesct__link--select');
    //       // console.log(idCh);
    //       $('[data-price-pro="'+idChPro+'"]').addClass('selPrice');
    //     }
    //   });
    // });

    // $('#envioDatos').click(function (e) {
    //     e.preventDefault();
    //     var form = $("#form_contacto");
    //     var url = form.attr('action');
    //   var data = form.serialize();
    //   console.log("hola");
    //   console.log(url);
    //   console.log(data);
    //     $.ajax({
    //         type: 'POST',
    //         url: url,
    //         data: data,
    //         dataType: 'json',
    //         success: function (json) {
    //       console.log(json);
    //     },
    //     error: function(json){
    //       var error = '';
    
    //       console.log("error");
    //       console.log(json);
    //     }
    //     })
    // });  

   

    // Formulario Validate
  $("#form_contacto").validate({
    errorElement: 'div',
    errorClass: 'error-line',
    rules: {
      nombre: "required",
      email: {
        required: true,
        email: true,
      },
      telefono: {
        required: true,
        number: true,
      },
      negocio: "required",
      mensaje: "required",
    },
    messages: {
      nombre: '<i class="fa fa-exclamation-triangle"></i>',
      email: {
        required: '<i class="fa fa-exclamation-triangle"></i>',
        email: '<i class="fa fa-exclamation-triangle"></i>',
      },
      telefono: {
        required: '<i class="fa fa-exclamation-triangle"></i>',
        number: '<i class="fa fa-exclamation-triangle"></i>',
      },
      negocio: '<i class="fa fa-exclamation-triangle"></i>',
      mensaje: '<i class="fa fa-exclamation-triangle"></i>',
    },
    submitHandler: function(form) {
      //var form = $("#form_contacto");
      //var url = form.attr('action');
      //var data = form.serialize();
      console.log("hola");
      console.log(url);
      console.log(data);
      const form_new = new FormData();
      form_new.append("nombre", $("#nombre").val());
      form_new.append("fuente", "6");
      form_new.append("telefono", $("#telefono").val());
      form_new.append("correo", $("#email").val());
      form_new.append("assigment", "Sitio Web Kiper");
      form_new.append("nombre_campana", "Sitio Web Kiper");
      form_new.append("utm_ter", "funnel id");
      form_new.append("mensaje", $("#mensaje").val());
      form_new.append("empresa", $("#negocio").val());

      const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://kiper.kiper.io/api/v1/forms/register?token=RmcK798C571HdA3532yu6Sio79hu782r",
        "method": "POST",
        "headers": {},
        "processData": false,
        "contentType": false,
        "mimeType": "multipart/form-data",
        "data": form_new
      };

      $.ajax(settings).done(function (response) {
        console.log(response);
      });
     /* $.ajax({
        type: 'POST',
        url: url,
        data: data,
        dataType: 'json',
        success: function (json) {
          console.log(json);
          
        },
        error: function(json){
          var error = '';
    
          console.log("error");
          console.log(json);
        }
      });*/

          
    }
  });
  // Wow Animaciones
  wowData();
  // Incremento
  extrasInput('#extras-cant-max-1', '#extras-cant-min-1', '#cantidad-ct-1');
  // Card number
  $('#credit-number').on('input', function () {
    $(this).val(function (index, value) {
      return cc_format(value);
    });
  });
  $('#credit-ccv').on('keypress change blur', function () {
    $(this).val(function (index, value) {
      return value.replace(new RegExp(/[^\d]/,'ig'), "").replace(/(.{4})/g, '$1 ');
    });
  });

  $('[data-mobile]').click(function(e) {
    e.preventDefault();
    var dataMob = $(this).attr('data-mobile');
    $(dataMob).toggle( "slow" );
  });

  $('#inpPais').change(function() {
    var for_item = $(this).val();
    if(for_item != '' && for_item.length > 0) {
      $('#inpEdo').prop("disabled", false);
    } else {
      $('#inpEdo').prop("disabled", true);
    }
  });

  // $("#inpPais").on('change', function(){
  //   var selectedCountry = $("#inpPais").val();
  //   var selectStatus = $("#inpPais").data('status-pais');
  //   var selectId = $("#inpPais").data('id-pais');
  //   console.log(selectedCountry);
  //   $.request('onCalculate',{
  //       data: { codigo : selectedCountry } 
  //   }).done(function(data){
  //       $("#response").html(data);
  //   });
  //   $('#frmProbar').request('onTest', {
  //     data: {
  //       inpPais: selectedCountry
  //     },
  //     success: function(data) {
  //       // console.log(data + 'hola');
  //       $("#inpEdo").html(data);
  //       $('#inpEdo').prop("disabled", false);
  //     }
  //   });
  // });

  const currency = function(number){
    return new Intl.NumberFormat('es-MX', {style: 'currency',currency: 'MXN', minimumFractionDigits: 2}).format(number);
  };

  $valorChecado = $('[data-check-btn]:checked').val();
  $("#planSelec").val($('[data-check-btn]:checked').attr("for-data"));
  // Subtotal valor incial
  $('#subtotal').text(currency($valorChecado));
  // $('#currencyField').formatCurrency('.currencyLabel');
  $('#subTotalPrice').val($valorChecado);
  // Total valor inicial
  $('#totalFin').text(currency($valorChecado));
  $('#totalPriceFin').val($valorChecado);
  
  $valPersonal = $('#cantidad-ct-1');
  $checks = $("[data-check-btn]");
  $('#cantidadLic').text($valPersonal.val());
  $checks.on('change', function() {
    var subPrecio = parseFloat($(this).val());
    var subPerso = parseFloat($('#cantidad-ct-1').val());
    var multiplyVal = (subPrecio*subPerso);
    var string = $checks.filter(":checked").map(function(i,v){
      return this.value;
    }).get().join(" ");
    var sinIvaBtn = parseFloat((string*subPerso));
    var ivaBtn = parseFloat((string*subPerso)*.16);
    // console.log(multiplyVal);

    $('#subtotal').text(currency(string));
    $('#subTotalPrice').val(string);
    $("#iva").text(currency(ivaBtn));
    $("#totalIva").val(ivaBtn);
    $('#totalFin').text(currency((multiplyVal+ivaBtn)));
    $('#totalPriceFin').val(multiplyVal+ivaBtn);
    $("#planSelec").val($('[data-check-btn]:checked').attr("for-data"));
  });
  var $monto = parseFloat($("#totalPriceFin").val());
  var costo_plan = $checks.filter(':checked').val();
  var no_usuarios = $('#cantidad-ct-1').val();
  // var sinIva = parseFloat((costo_plan*no_usuarios));
  var iva = parseFloat((costo_plan*no_usuarios)*.16);
  $("#iva").text(currency(iva));
  $("#totalIva").val(iva);
  $('#totalFin').text(currency(($monto+iva)));
  $("#totalPriceFin").val($monto+iva);
  // console.log($monto);
  // $('#facturaSi').on('change', function() {
    // var tasa = 16;
    // var iva = (monto * tasa)/100;

    // console.log('Cotos plan: '+costo_plan+' Usuarios: '+no_usuarios + ' Saco el IVA: '+iva);
    // console.log($monto+iva);

  //   if($('#facturaSi').is(':checked')) {
  //     $('.boxPrices__fac').fadeIn();
  //     $("#iva").text(iva);
  //     $("#totalIva").val(iva);
  //     $('#totalFin').text('$'+($monto+iva));
  //     $("#totalPriceFin").val($monto+iva);
  //   } else {
  //     $('.boxPrices__fac').fadeOut();
  //     $("#iva").text('$0');
  //     $("#totalIva").val('');
  //     $('#totalFin').text('$'+(sinIva));
  //     $("#totalPriceFin").val(sinIva);
  //   }
  // });
});

function cc_format(value) {
  var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
  var matches = v.match(/\d{4,16}/g);
  var match = matches && matches[0] || ''
  var parts = []
  for (i=0, len=match.length; i<len; i+=4) {
    parts.push(match.substring(i, i+4))
  }
  if (parts.length) {
    return parts.join(' ')
  } else {
    return value
  }
}

function checkDigit(event) {
  var code = (event.which) ? event.which : event.keyCode;
  if ((code < 48 || code > 57) && (code > 31)) {
      return false;
  }
  return true;
}

function wowData() {
  var wow = new WOW({
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       false,       // default
    live:         true        // default
  })
  setTimeout(function() {
    wow.init();
  }, 1000);
}

function extrasInput(id, idx, cant) {
  var valor = $(cant).val();
  var x = valor;
  var y = valor;
  var z = valor;
  var w = valor;
  var per1 = valor;
  var per2 = valor;
  const currency = function(number){
    return new Intl.NumberFormat('es-MX', {style: 'currency',currency: 'MXN', minimumFractionDigits: 2}).format(number);
  };
  // console.log(valor + 'Personas');
  $(id).click(function () {
    var valorUno = parseFloat($('[data-check-btn]:checked').val());
    var valorDos = parseFloat($('[data-check-btn]:checked').val());
    var ivaUno = parseFloat((valorUno*++per1)*.16);
    // console.log((valorUno*++y)+ivaUno);

    $(cant).attr('value', ++x);
    $('#totalIva').val(ivaUno);
    $('#iva').text(currency(ivaUno));
    $('#totalFin').text(currency((valorDos*++y)+ivaUno));
    $('#totalPriceFin').val((valorUno*++z)+ivaUno);
    $('#cantidadLic').text(++w);
    if($(cant).val() > 1) {
      $(idx).removeClass('disabled');
    }
  });
  $(idx).click(function () {
    var valorTres = parseFloat($('[data-check-btn]:checked').val());
    var valorCuatro = parseFloat($('[data-check-btn]:checked').val());
    var ivaDos = parseFloat((valorTres*--per1)*.16);

    if ($(cant).val() <= 1) {
      $(idx).addClass('disabled');
    } else {
      $(cant).attr('value', --x);
      $('#totalIva').val(ivaDos);
      $('#iva').text(currency(ivaDos));
      $('#totalFin').text(currency((valorTres*--y)+ivaDos));
      $('#totalPriceFin').val((valorCuatro*--z)+ivaDos);
      $('#cantidadLic').text(--w);
    }
  });
}

// function validaDominio(){
// }


$(function() {


// jQuery.extend(jQuery.validator.messages, {
//     required: "Campo requerido",
//     email: "Email inválido",
//     number: "Ingrese solo digitos",
//     digits: "Ingrese solo digitos",
//     creditcard: "Número de tarjeta inválido",
//     equalTo: "El email debe ser igual",
//     maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
//     minlength: jQuery.validator.format("Please enter at least {0} characters."),
//     rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
//     range: jQuery.validator.format("Please enter a value between {0} and {1}."),
//     max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
//     min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
// });

     //validación con formulario inicia 
    $("#frmProbar").validate({
       errorElement: 'div',
      errorClass: 'error-label',
      rules: {
        inpNombres: {
          required: true 
        },
        inpApellidos: {
          required: true 
        },
        inpEmail: {
          required: true,
          email: true
        },
        inpConfEmail: {
          required: true,
          email: true,
          equalTo: "#inpEmail"
        },
        inpNegocio: {
          required: true 
        },
        inpPais: {
          required: true 
        },
        inpEdo:{
          required: true 
        }
      },
      messages: {
        inpNombres: {
          required: '<i class="fa fa-exclamation-triangle"></i> Este campo es requerido'
        },
        inpApellidos: {
          required: '<i class="fa fa-exclamation-triangle"></i> Este campo es requerido'
        },
        inpEmail: {
          required: '<i class="fa fa-exclamation-triangle"></i> Campo requerido',
          email: '<i class="fa fa-exclamation-triangle"></i> Email inválido'
        },
        inpConfEmail: {
          required: '<i class="fa fa-exclamation-triangle"></i> Campo requerido',
          equalTo: '<i class="fa fa-exclamation-triangle"></i> Los email no coinciden'
        },
        inpTelefono: {
          required: '<i class="fa fa-exclamation-triangle"></i> Campo requerido',
          number: '<i class="fa fa-exclamation-triangle"></i> Sólo números'
        },
        inpNegocio: {
          required: '<i class="fa fa-exclamation-triangle"></i> Campo requerido'
        },
        inpPais: {
          required: '<i class="fa fa-exclamation-triangle"></i> Selecciona un país' 
        },
        inpEdo:{
          required: '<i class="fa fa-exclamation-triangle"></i> Selecciona un estado' 
        }
      },
      submitHandler: function(form) {
        var form = $("#frmProbar");
        var url = form.attr('action');
        var data = form.serialize();
        if($("#inpFlag").val() == 0){
          $.ajax({
            type: 'POST',
            url: "http://local.adminkiper/KipersConfiguration/saveComenzarAhora",
            data: data,
            dataType: 'json',
            success: function (data) {
              console.log(data.code);
              if(data.code == 200){
                localStorage.setItem("email_cliente", $("#inpEmail").val());
                localStorage.setItem("data_client", data.data_client);
                window.location.href = siteUrl + "/carrito-de-compra";
              }
              else{
                $("#inpFlag").val(1);
                $(".msj").text("¡El email ya se encuentra registrado!");
                $(".content-msj").show();
                $(".btnSubmit").addClass("disabled");
              }
            },
            error: function(json){
              var error = '';      
              console.log("error");
              console.log(json);
            }
          });
        }
        else{
          return false;
        }
        form.request('onTest', {
              // data: {
              //   inpPais: selectedCountry
              // },
              // success: function(data) {
              //   $("#inpEdo").html(data);
              //   $('#inpEdo').prop("disabled", false);
              // }
          // redirect: '/dashboard'
        });
      }
    });

    $("#inpEmail").focusout(function(){
      var for_item = $(this).val();
      if(for_item.length > 3){
        $.ajax({
          type: 'POST',
          url: "http://local.adminkiper/KipersConfiguration/existClientRegis",
          data: 
          {
            email: for_item
          },
          dataType: 'json',
          success: function (data) {
            console.log(data.code);
            if(data.code == 404){
              $("#inpFlag").val(0);
              $(".msj").empty();
              $(".content-msj").hide();
              $(".btnSubmit").removeClass("disabled");
            }
            else{
              $("#inpFlag").val(1);
              $(".msj").text("¡El email ya se encuentra registrado!");
              $(".content-msj").show();
              $(".btnSubmit").addClass("disabled");
            }
          },
          error: function(json){
            var error = '';      
            console.log("error");
            console.log(json);
          }
        });
      }
    });

    // $("#frmProbar").removeAttr("novalidate");

});
