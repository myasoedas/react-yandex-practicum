# react-yandex-practicum
### Тема: Декомпозиция пропсов
### Пример 1
```HTML
// Плохой пример
<OrderContent
    orderId={"ADF-21244324-11"}
    addressCoords={[56.033661, 37.859848]}
    addressName="ул. 26 Бакинских Комиссаров, дом 11"
    mapProvider="yandex"
    products={
        [
            { id: 12, name: "Ватные диски", count: 2 },
            { id: 45, name: "Корм для рыбок", count: 1 }
            { id: 78, name: "Гранатовый сок", count: 4 }
        ]
    }
    time="25.09.2021 14:33:24"
    customerName="Евгения Лучинова"
    customerEmail="email.pochta@example.com"
    customerPhone={"+7 (495) 777-77-77"}
    productsView="list"
    totalPrice={1293.30}
    favoriteProduct={{ id: 78, name: "Гранатовый сок" }}
    onCancelOrder={
        showNotification(
            "Вы уверены, что хотите отменить заказ?",
            { onConfirm: cancelOrder, onCancel: Modal.active.close }
        )
    }
    onSubmitOrder={proceedToPayement}
    onChangeFavoriteProduct={setFavorite}
    onChangeProductView={toggleView}
    onApplyCode={
        showPrompt(
            "Введите промокод:",
            { onSubmit: applyCode, onCancel: Modal.active.close }
        )
    }
    shouldSaveAddress={true}
/> 
```  
### Пример 2
```HTML
// Хороший пример
<OrderContent>
    <OrderInfo time="25.09.2021 14:33:24" orderId={"ADF-21244324-11"} />
    <Customer {...customer} />
    <Products data={products} />
    <Address 
        addressCoords={[56.033661, 37.859848]}
        addressName="ул. 26 Бакинских Комиссаров, дом 11"
        mapProvider="yandex"
    />
    <PromoCodeComponent />
    <span className="total-price">1293.30</span>
    <OrderControls />
</OrderContent> 
```
