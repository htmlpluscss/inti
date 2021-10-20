<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();


?>



<?if($arParams["USE_COMPARE"]=="Y"):?>
<?$APPLICATION->IncludeComponent(
	"bitrix:catalog.compare.list",
	"",
	Array(
		"IBLOCK_TYPE" => $arParams["IBLOCK_TYPE"],
		"IBLOCK_ID" => $arParams["IBLOCK_ID"],
		"NAME" => $arParams["COMPARE_NAME"],
		"DETAIL_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["element"],
		"COMPARE_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["compare"],
	),
	$component
);?>

<?endif?>

<?


if ($_GET['fil']==1)
{
$arFilter810 = Array();
if ($_SESSION['loc']=='en')
{
$arFilter810 = Array("IBLOCK_ID"=>28,"ACTIVE"=>'Y',
'PROPERTY_razraben'=>'INTI',"INCLUDE_SUBSECTIONS" =>'Y'
);
}
else
{
$arFilter810 = Array("IBLOCK_ID"=>28,"ACTIVE"=>'Y',
'PROPERTY_razrab'=>'ИНТИ',"INCLUDE_SUBSECTIONS" =>'Y'
);
}
$res5000 = CIBlockElement::GetList(Array('sort'=>'main'), $arFilter810, false, false, false);
while($ob5000 = $res5000->GetNextElement())
{
$arFields50 = $ob5000->GetFields();
$arFields510 = $ob5000->GetProperties();
$tob[]=$arFields50['ID'];
}
$temp='ser';
}
elseif ($_GET['fil']==2)
{

$arFilter810 = Array();
if ($_SESSION['loc']=='en')
{
$arFilter810 = Array("IBLOCK_ID"=>28,"ACTIVE"=>'Y',
'SECTION_ID'=>113,"INCLUDE_SUBSECTIONS" =>'Y'
);
}
else
{
$arFilter810 = Array("IBLOCK_ID"=>28,"ACTIVE"=>'Y',
'SECTION_ID'=>113,"INCLUDE_SUBSECTIONS" =>'Y'
);
}
$res5000 = CIBlockElement::GetList(Array('sort'=>'main'), $arFilter810, false, false, false);
while($ob5000 = $res5000->GetNextElement())
{
$arFields50 = $ob5000->GetFields();
$arFields510 = $ob5000->GetProperties();
$tob[]=$arFields50['ID'];
}

$temp='ser1';
}
elseif ($_GET['fil']==3)
{




$arFilter810 = Array();
if ($_SESSION['loc']=='en')
{
$arFilter810 = Array("IBLOCK_ID"=>28,"ACTIVE"=>'Y',
'!PROPERTY_razraben'=>'INTI','!SECTION_ID'=>113,"INCLUDE_SUBSECTIONS" =>'Y'
);
}
else
{
$arFilter810 = Array("IBLOCK_ID"=>28,"ACTIVE"=>'Y',
'!PROPERTY_razrab'=>'ИНТИ','!SECTION_ID'=>113,"INCLUDE_SUBSECTIONS" =>'Y'
);
}






$res5000 = CIBlockElement::GetList(Array('sort'=>'main'), $arFilter810, false, false, false);
while($ob5000 = $res5000->GetNextElement())
{
$arFields50 = $ob5000->GetFields();
$arFields510 = $ob5000->GetProperties();
$tob[]=$arFields50['ID'];
}
$temp='ser';
}




global $arrFilter;

$arrFilter = array('ID' =>$tob);
?>

<div class="docs-page docs-page--short">

		<div class="docs-page__body">

			<div class="docs-page__bg">

				<img src="<?php echo SITE_TEMPLATE_PATH ?>/img/docs/logo-bg.svg" loading="eager" alt="" width="1346" height="1345">

			</div>

			<div class="center">

				<div class="docs-page__content">

					<h1 class="docs-page__title h0">
						INTI.docs
					</h1>

				<div class="docs-page__btns">

					<div class="docs-page__tabs">

						<button class="docs-page__tabs-item docs-page__tabs-item--standarts docs-page__btns-item button btn btn--label is-active" type="button">
							Стандарты
						</button>

						<button class="docs-page__tabs-item docs-page__tabs-item--analytics docs-page__btns-item button btn btn--label" type="button">
							Аналитические обзоры
						</button>

					</div>

					<a href="/" class="docs-page__btns-item btn btn--label">
						Подробнее
					</a>

					<button class="docs-page__btns-item button btn btn--label btn--warning" type="button" data-modal="add-docs">
						Предложить стандарт
					</button>

				</div>

				<?include $_SERVER['DOCUMENT_ROOT'] . SITE_DIR . 'include/inti-v3/body-form.php';?>

				</div>

			</div>

		</div>

	</div>
<?
$APPLICATION->IncludeComponent(
	"bitrix:catalog.section",
	$temp,
	Array(
		"IBLOCK_TYPE" => 'mvp',
		"IBLOCK_ID" => 28,
		"ELEMENT_SORT_FIELD" => $arParams["ELEMENT_SORT_FIELD"],
		"ELEMENT_SORT_ORDER" => $arParams["ELEMENT_SORT_ORDER"],
 		"PROPERTY_CODE" => $arParams["LIST_PROPERTY_CODE"],
		"META_KEYWORDS" => $arParams["LIST_META_KEYWORDS"],
		"META_DESCRIPTION" => $arParams["LIST_META_DESCRIPTION"],
		"BROWSER_TITLE" => $arParams["LIST_BROWSER_TITLE"],
		"INCLUDE_SUBSECTIONS" =>'Y',
		"BASKET_URL" => $arParams["BASKET_URL"],
		"ACTION_VARIABLE" => $arParams["ACTION_VARIABLE"],
		"PRODUCT_ID_VARIABLE" => $arParams["PRODUCT_ID_VARIABLE"],
		"SECTION_ID_VARIABLE" => $arParams["SECTION_ID_VARIABLE"],
		"FILTER_NAME" => 'arrFilter',
		"DISPLAY_PANEL" => $arParams["DISPLAY_PANEL"],
		"CACHE_TYPE" => $arParams["CACHE_TYPE"],
		"CACHE_TIME" => $arParams["CACHE_TIME"],
		"CACHE_FILTER" => $arParams["CACHE_FILTER"],
		"CACHE_GROUPS" => $arParams["CACHE_GROUPS"],
		"SET_TITLE" => $arParams["SET_TITLE"],
		"SET_STATUS_404" => $arParams["SET_STATUS_404"],
		"DISPLAY_COMPARE" => $arParams["USE_COMPARE"],
		"PAGE_ELEMENT_COUNT" => 4,
		"LINE_ELEMENT_COUNT" => $arParams["LINE_ELEMENT_COUNT"],
		"PRICE_CODE" => $arParams["PRICE_CODE"],
		"USE_PRICE_COUNT" => $arParams["USE_PRICE_COUNT"],
		"SHOW_PRICE_COUNT" => $arParams["SHOW_PRICE_COUNT"],

		"PRICE_VAT_INCLUDE" => $arParams["PRICE_VAT_INCLUDE"],

		"DISPLAY_TOP_PAGER" => $arParams["DISPLAY_TOP_PAGER"],
		"DISPLAY_BOTTOM_PAGER" => $arParams["DISPLAY_BOTTOM_PAGER"],
		"PAGER_TITLE" => $arParams["PAGER_TITLE"],
		"PAGER_SHOW_ALWAYS" => $arParams["PAGER_SHOW_ALWAYS"],
		"PAGER_TEMPLATE" => $arParams["PAGER_TEMPLATE"],
		"PAGER_DESC_NUMBERING" => $arParams["PAGER_DESC_NUMBERING"],
		"PAGER_DESC_NUMBERING_CACHE_TIME" => $arParams["PAGER_DESC_NUMBERING_CACHE_TIME"],
		"PAGER_SHOW_ALL" => $arParams["PAGER_SHOW_ALL"],

		"SECTION_ID" => $arSection55['ID'],
		"SECTION_CODE" => $arSection55['CODE'],
		"SECTION_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["section"],
		"DETAIL_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["element"],
	),
	$component
);
?>
















